// ------------------------------------------------------------------------------
// name: string.repeat
// author: 喵大斯( mschool.tech )
// created: 2019/6/26 21:04
// ------------------------------------------------------------------------------

const CASE_WORD = /([a-zA-Z][a-z0-9]*)/g;

/**
 * 重复字符串指定的次数
 * @param {String} input 输入源
 * @param {Number} [size] 需要重复的次数
 * @return {String}
 *
 * @example
 *
 * repeat('a');
 * // => 'aaa'
 *
 * repeat('good!');
 * // => 'good!good!good!'
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
 * @return {String}
 *
 * @example
 *
 * trim(' a bc   ');
 * // => 'a bc'
 */
export function trim(input) {
  return input.replace(/^\s*(.*?)\s*$/i, '$1');
}

/**
 * 检查 value 是否是原始字符串String或者对象。
 *
 * @param {*} value 待检查的值
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

/**
 * 转换字符串 value 为[驼峰](https://en.wikipedia.org/wiki/CamelCase)写法
 * @param {string} [value=''] 要转换的字符串
 * @returns {string} 返回驼峰写法的字符串
 * @example
 *
 * camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * camelCase('__FOO_BAR__');
 * // => 'fooBar'
 *
 * camelCase('fooBar');
 * // => 'fooBar'
 */
export function camelCase(value) {
  const matches = value.match(CASE_WORD);
  const first = matches[0].toLowerCase();
  const other = matches.slice(1).reduce((r, item) => {
    return r + _upperFirst(item);
  }, '');
  return `${first}${other}`;
}

function _upperFirst(value) {
  value = value.toLowerCase();
  return value.charAt(0).toUpperCase() + value.substr(1);
}

/**
 * 转换 value 为 [中横线](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles)写法
 * @param {string} [value=''] 要转换的字符串
 * @returns {string} 返回转换后的字符串
 * @example
 *
 * kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
export function kebabCase(value) {
  const matches = value.match(CASE_WORD);
  return matches.map((item) => item.toLowerCase()).join('-');
}

/**
 * 转换 value 为 [下划线](https://en.wikipedia.org/wiki/Snake_case)写法
 * @param {string} [value=''] 要转换的字符串
 * @returns {string} 返回转换后的字符串
 * @example
 *
 * snakeCase('Foo Bar');
 * // => 'foo_bar'
 *
 * snakeCase('fooBar');
 * // => 'foo_bar'
 *
 * snakeCase('--FOO-BAR--');
 * // => 'foo_bar'
 */
export function snakeCase(value) {
  const matches = value.match(CASE_WORD);
  return matches.map((item) => item.toLowerCase()).join('_');
}
