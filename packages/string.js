// ------------------------------------------------------------------------------
// name: string.repeat
// author: 喵大斯( mschool.tech )
// created: 2019/6/26 21:04
// ------------------------------------------------------------------------------

/**
 * 重复字符串指定的次数
 * @param {String} input 输入源
 * @param {Number} [size] 需要重复的次数
 */
export function repeat(input, size = 3) {
  let r = '';
  let _size = size || 3;
  for (let i = 0; i < _size; i++) {
    r += input;
  }
  return r;
}

/**
 * 去除字符串首尾的空格
 * @param {String} input 输入源
 */
export function trim(input) {
  return input.replace(/^\s*(.*?)\s*$/i, '$1');
}

/**
 * 检查 value 是否是原始字符串String或者对象。
 *
 * @param {*} value
 * @returns {boolean} 如果 value 为一个字符串，那么返回 true，否则返回 false。
 * @example
 *
 * isString('abc');
 * // => true
 *
 * isString(1);
 * // => false
 */
export function isString(value) {
  return typeof value === 'string';
}
