// ------------------------------------------------------------------------------
// name: datetime
// author: mudas( mschool.tech )
// created: 2021/1/30 6:05
// ------------------------------------------------------------------------------

import dayjs from 'dayjs';

/**
 * 检查 value 是否是 Date 对象。
 *
 * @param {*} value 要检查的值。
 * @returns {boolean} 如果 value 是一个日期对象，那么返回 true，否则返回 false。
 */
export declare function isDate(value): boolean;

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
export declare function parseTime(value): { year, month, day, hour, minute, second };

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
export declare function genDate({ year, month, day, hour, minute, second }): Date;

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
export declare function betweenDate(businessTime: string | string[], now?: number): boolean;

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
export declare function dateformat(dateInfo?: string | number | Date, format?: string): string;

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
export declare function times(ms: number, all?: boolean, unit?: { day: string, hour: string, minute: string, second: string }): string;

export { dayjs };
