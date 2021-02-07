// ------------------------------------------------------------------------------
// name: object
// author: mudas( mschool.tech )
// created: 2021/1/28 16:31
// ------------------------------------------------------------------------------

const toString = Object.prototype.toString;
const tag = '[object Object]';

/**
 * 取得指定数据的原始类型（如 [object Object]）
 * @param {*} value
 * @return {string}
 */
export function getTag(value) {
  return toString.call(value);
}

/**
 * 检测 value 是否为 `Object`
 * [类型](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * (如 arrays, functions, objects, regexes, `new Number(0)`, 和 `new String('')`)
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * isObject({});
 * // => true
 *
 * isObject([1, 2, 3]);
 * // => true
 *
 * isObject(noop);
 * // => true
 *
 * isObject(null);
 * // => false
 */
export function isObject(value) {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}

/**
 * 检查 value 是否为类似 Object 类型（如 {}、arrays等，但不包含 null、undefined、function）
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * isObjectLike({});
 * // => true
 *
 * isObjectLike([1, 2, 3]);
 * // => true
 *
 * isObjectLike(noop);
 * // => false
 *
 * isObjectLike(null);
 * // => false
 */
export function isObjectLike(value) {
  return value != null && typeof value === 'object';
}

/**
 * 检查 value 是否是普通对象。 也就是说该对象由 Object 构造函数创建，或者 prototype 为 null 。
 * @param value
 * @return {boolean}
 *
 * @example
 * function Foo() {
 *  this.a = 1;
 * }
 *
 * isPlainObject(new Foo);
 * // => false
 *
 * isPlainObject([1, 2, 3]);
 * // => false
 *
 * isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * isPlainObject(Object.create(null));
 * // => true
 */
export function isPlainObject(value) {
  if (!isObjectLike(value)) return false;
  return value !== null && value !== undefined && getTag(value) === tag;
}
