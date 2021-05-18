// ------------------------------------------------------------------------------
// name: number
// author: mudas( mschool.tech )
// created: 2021/1/28 16:31
// ------------------------------------------------------------------------------

import { isBoolean } from './boolean';

const INFINITY = 1 / 0;
const MAX_INTEGER = Number.MAX_SAFE_INTEGER;

/**
 * 检查 value 是否是原始 Number 数值型 或者 数值常量对象
 * @param {*} value 要检查的值。
 * @return {boolean}
 *
 * @example
 * isNumber(3);
 * // => true
 *
 * isNumber(Number.MIN_VALUE);
 * // => true
 *
 * isNumber(Infinity);
 * // => true
 *
 * isNumber('3');
 * // => false
 */
export function isNumber(value) {
  return typeof value === 'number';
}

/**
 * 检查 value 是否为全数字内容
 * <p>注：该方法包含所有 isNumber(value) 为 true 的情况，以及字符串类型的数字。即该方法比 isNumber 的条件更宽泛，可用于检测任意数字内容出现的场景。</p>
 * <p>注：NaN 也属于一个合法的数值型。</p>
 * @param {*} value 要检查的值。
 * @return {boolean}
 *
 * @example
 * isNumeric(Number.MIN_VALUE);
 * // => true
 *
 * isNumeric(true);
 * // => false
 *
 * isNumeric(3);
 * // => true
 *
 * isNumeric('3');
 * // => true
 *
 * isNumeric('-3');
 * // => true
 *
 * isNumeric('3.2');
 * // => true
 */
export function isNumeric(value) {
  return isNumber(value) || /^-?\d+(\.\d+)?$/.test(value);
}

/**
 * 检查 value 是否是 NaN。
 *
 * 注意: 这个方法基于 [Number.isNaN](https://mdn.io/Number/isNaN)，和全局的
 * [isNaN](https://mdn.io/isNaN) 不同之处在于，全局的 [isNaN](https://mdn.io/isNaN) 对于 undefined 和其他非数字的值返回 true。
 *
 * @param {*} value 要检查的值。
 * @returns {boolean} 如果 value 是一个 NaN，那么返回 true，否则返回 false。
 * @example
 *
 * isNaN(NaN);
 * // => true
 *
 * isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => false
 */
export function isNaN(value) {
  if (Number.isNaN) {
    return Number.isNaN(value);
  }

  // eslint-disable-next-line no-self-compare
  return value !== +value;
}

/**
 * 产生一个包括 lower 与 upper 之间的随机数。 如果只提供一个参数返回一个0到提供数之间的数。
 * 如果 floating 设为 true，或者 lower 或 upper 是浮点数，结果返回浮点数。
 *
 * **注意**: JavaScript 遵循 IEEE-754 标准处理无法预料的浮点数结果。
 *
 * @param {number} [lower=0] 下限。
 * @param {number} [upper=1] 上限。
 * @param {boolean} [floating] 指定是否返回浮点数。
 * @returns {number} 返回随机数。
 * @example
 *
 * random(0, 5);
 * // => 0, 1, 2, 3, 4, 5
 *
 * random(5);
 * // => 0, 1, 2, 3, 4, 5
 *
 * random(5, true);
 * // => 0 到 5 之间的浮点数（如：1.6288619395308945，0.5192344462779486...）
 *
 * // lower 或 upper 为小数，且 floating 为 false，则严格按照对应的小数位数返回随机数结果
 * random(1, 1.05);
 * // => 1, 1.01, 1.02, 1.03, 1.04, 1.05
 */
export function random(lower, upper, floating) {

  if (floating === undefined) {
    // random(5, true)
    if (isBoolean(upper)) {
      floating = upper;
      upper = undefined;
    }

    // random(true)
    else if (isBoolean(lower)) {
      floating = lower;
      lower = undefined;
    }
  }

  if (lower === undefined && upper === undefined) {
    lower = 0;
    upper = 1;
  }
  else {
    lower = _toFinite(lower);
    if (upper === undefined) {
      upper = lower;
      lower = 0;
    }
    else {
      upper = _toFinite(upper);
    }
  }

  if (lower > upper) {
    const temp = lower;
    lower = upper;
    upper = temp;
  }

  if (floating || lower % 1 || upper % 1) {
    const rand = Math.random();
    const length = floating ? parseFloat('1e-' + ((rand + '').length - 1)) : Math.max(_numDigit(lower), _numDigit(upper));
    const factor = toFixed(rand * (upper - lower), length);
    return toFixed(Math.min(lower + factor, upper), length);
  }

  return lower + Math.floor(Math.random() * (upper - lower + 1));
}

/**
 * 统计浮点数的小数位数
 * @param {Number} value 数值
 * @private
 */
function _numDigit(value) {
  return !value
         || !isNumber(value)
         || value === Number.MIN_VALUE
         || value === Number.MAX_VALUE
         || value === Number.MIN_SAFE_INTEGER
         || value === Number.MAX_SAFE_INTEGER
         || value === -INFINITY
         || value === INFINITY
         ? 0 : (value.toString().split('.')[1] || []).length;
}

/**
 * 保留指定位数的小数
 * @param {Number} value 原数值
 * @param {Number} size 需要保留的小数位数
 * @param {Function} [processor=Math.round] 截断小数的处理函数，默认使用四舍五入函数
 * @return {Number}
 *
 * @example
 *
 * toFixed(1.468468, 2);
 * // => 1.47
 *
 * toFixed(1.468468, 2, Math.floor);
 * // => 1.46
 */
export function toFixed(value, size, processor = Math.round) {
  const positive = 10 ** size;
  return processor(value * positive) / positive;
}

/**
 * 转换 value 为一个有限数字
 * @param {*} value
 * @return {Number}
 * @private
 */
function _toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = Number(value);
  if (value === INFINITY || value === -INFINITY) {
    const sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  // eslint-disable-next-line no-self-compare
  return value === value ? value : 0;
}
