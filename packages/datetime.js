// ------------------------------------------------------------------------------
// name: datetime
// author: mudas( mschool.tech )
// created: 2021/1/30 6:05
// ------------------------------------------------------------------------------

import dayjs from 'dayjs';
import { isNumber } from './number';
import { isArray } from './array';
import { isObject, getTag } from './object';

/**
 * 检查 value 是否是 Date 对象。
 *
 * @param {*} value 要检查的值。
 * @returns {boolean} 如果 value 是一个日期对象，那么返回 true，否则返回 false。
 */
export function isDate(value) {
  return isObject(value) && getTag(value) === '[object Date]';
}

/**
 * 解析字符串时间
 * @param {String} value 如：06:00或者06:00:00（同时支持 '2021-02-01 06:00:00' 的完整日期字符串）
 * @return {{ year, month, day, hour, minute, second }} 年，月，日，小时，分钟，秒数
 *
 * @example
 *
 * parseTime('06:00'); // now at '2021-03-02 16:00'
 * // => { year:2021, month:3, day:2, hour:6, minute:0, second:0 }
 *
 * parseTime('2021-03-02 16:00:00');
 * // => { year:2021, month:3, day:2, hour:16, minute:0, second:0 }
 */
export function parseTime(value) {
  const ts = value.split(':');
  const length = ts.length;
  let ymd;

  if (ts[0].indexOf(' ') !== -1) {
    const split = ts[0].split(/\s+/);
    ymd = dayjs(split[0]).toDate();
    ts[0] = split[1];
  }
  else {
    ymd = new Date();
  }

  const hour = parseInt(ts[0], 10);
  const minute = parseInt(ts[1], 10);
  const second = length === 3 ? parseInt(ts[2], 10) : 0;

  return { year: ymd.getFullYear(), month: ymd.getMonth() + 1, day: ymd.getDate(), hour, minute, second };
}

/**
 * 根据指定的自选参数，生成日期对象
 * <p>该方法的参数一般可使用 parseTime 进行得到。</p>
 * @param option 日期时间参数
 * @param {Number} [option.year] 年
 * @param {Number} [option.month] 月
 * @param {Number} [option.day] 日
 * @param {Number} [option.hour] 小时
 * @param {Number} [option.minute] 分钟
 * @param {Number} [option.second] 秒
 * @return {Date}
 *
 * @example
 *
 * genDate({year:2021, month:3, day:2, hour:16});
 * // => Date
 */
export function genDate({ year, month, day, hour, minute, second }) {
  const date = new Date();

  if (typeof year === 'number') date.setFullYear(year);
  if (typeof month === 'number') date.setMonth(month - 1);
  if (typeof day === 'number') date.setDate(day);

  if (typeof hour === 'number') date.setHours(hour);
  if (typeof minute === 'number') date.setMinutes(minute);
  if (typeof second === 'number') date.setSeconds(second);

  return date;
}

/**
 * 检测当前时间是否在指定时间范围内（毫秒级对比，一般用于检测当前时间是否在店铺营业时间范围内）
 * @param {String|String[]} businessTime 指定时间范围（如 '00:00~23:59'）
 * @param {Number|Date} [now=Date.now()] 待检测目标时间（默认取当前时间）
 * @return {boolean}
 * @example
 *
 * betweenDate('08:08:59~23:08:59');
 * // => true // now at '10:08:59'
 */
export function betweenDate(businessTime, now = Date.now()) {
  if (businessTime) {
    const t = isArray(businessTime) ? businessTime : businessTime.split(/[~]/i);
    const d1 = genDate(parseTime(t[0]));
    const d2 = genDate(parseTime(t[1]));

    const ms1 = d1.getTime();
    let ms2 = d2.getTime();

    // 检测 d2 是否同设置成 00:00
    // d2 向前推进24小时
    if (ms1 === ms2 && d2.getHours() === 0 && d2.getMinutes() === 0) {
      ms2 += 86400000; // 加1天的毫秒数
    }

    const nowNum = isDate(now) ? now.getTime() : (isNumber(now) ? now : Date.now());

    return ms1 < nowNum && nowNum < ms2;
  }
  return false;
}

/**
 * 格式化日期信息为指定格式
 * @param {String|Number|Date} [dateInfo=null] 日期数据信息
 * @param {String} [format='YYYY-MM-DD'] 目标格式（默认：'YYYY-MM-DD'，其它：'HH:mm:ss'），具体参考[format](https://dayjs.gitee.io/docs/zh-CN/display/format)
 * @return {string}
 * @example
 *
 * dateformat('2021/02/20 08:08:59');
 * // => 2021-02-20
 *
 * dateformat('2021/02/20 08:08:59', 'YYYY-MM-DD HH:mm:ss');
 * // => 2021-02-20 08:08:59
 *
 * dateformat(1611961835705, 'YYYY-MM-DD HH:mm:ss');
 * // => 2021-01-30 07:10:35
 */
export function dateformat(dateInfo = null, format = 'YYYY-MM-DD') {
  return dayjs(!dateInfo ? undefined : dateInfo).format(format);
}

/**
 * 将毫秒转化为相应的时间字符串
 * @param {Number} ms 毫秒数
 * @param {Boolean} [all=true] 是否输出所有符合条件的数值（若为 false，则只取按“天>小时>分钟>秒”的优先级显示后缀）
 * @param {Object} [unit={ day: '天', hour: '小时', minute: '分', second: '秒' }] 默认后缀单位
 *
 * @example
 *
 * times(9000760);
 * // => '2小时30分0秒'
 *
 * times(9000760, false);
 * // => '3小时'
 */
export function times(ms, all = true, unit = { day: '天', hour: '小时', minute: '分', second: '秒' }) {
  let src = [];
  let base = ms;

  if (ms > 86400000) {
    src.push({
      value: (all ? base : ms) / 86400000,
      label: unit.day
    });

    base %= 86400000;
  }

  if (ms > 3600000 && (src.length <= 0 || all)) {
    src.push({
      value: (all ? base : ms) / 3600000,
      label: unit.hour
    });

    base %= 3600000;
  }

  if (ms > 60000 && (src.length <= 0 || all)) {
    src.push({
      value: (all ? base : ms) / 60000,
      label: unit.minute
    });

    base %= 60000;
  }

  if (src.length <= 0 || all) {
    src.push({
      value: (all ? base : ms) / 1000,
      label: unit.second
    });
  }

  // 若全部显示模式，各单位的值取整数部分，否则取大原则进行单模式显示（即2.5小时将返回3小时）
  return src.map(item => `${all ? item.value >> 0 : Math.ceil(item.value)}${item.label}`).join('');
}

export { dayjs };
