// ------------------------------------------------------------------------------
// name: array
// author: mudas( mschool.tech )
// created: 2021/1/28 16:32
// ------------------------------------------------------------------------------

import { isNil } from './null';
import { isFunction } from './function';

/**
 * 检查 value 是否是 Array 类对象。
 *
 * @param {*} value 要检查的值。
 * @returns {boolean} 如果value是一个数组返回 true，否则返回 false。
 * @example
 *
 * isArray([1, 2, 3]);
 * // => true
 *
 * isArray(document.body.children);
 * // => false
 *
 * isArray('abc');
 * // => false
 *
 * isArray(noop);
 * // => false
 */
export function isArray(value) {
  return Array.isArray(value);
}

/**
 * 检查 value 是否是类数组。 如果一个值被认为是类数组，那么它不是一个函数，并且value.length是个整数，大于等于 0，小于或等于 Number.MAX_SAFE_INTEGER。
 *
 * @param {*} value 要检查的值。
 * @returns {boolean} 如果value是一个类数组，那么返回 true，否则返回 false。
 * @example
 *
 * isArrayLike([1, 2, 3]);
 * // => true
 *
 * isArrayLike(document.body.children);
 * // => true
 *
 * isArrayLike('abc');
 * // => true
 *
 * isArrayLike(noop);
 * // => false
 */
export function isArrayLike(value) {
  return !isNil(value)
         && !isFunction(value)
         && (typeof value.length === 'number' && value.length > -1 && value.length % 1 === 0 && value.length <= Number.MAX_SAFE_INTEGER);
}

/**
 * 检测 `value` 是否为不包含任何元素的空 `Array` 对象。
 * @param value 要检查的值。
 * @returns {boolean} 如果value是一个空数组返回 true（非数组同样将返回 true），否则返回 false。
 * @example
 *
 * isEmptyArray([1, 2, 3]);
 * // => false
 *
 * isEmptyArray([]);
 * // => true
 */
export function isEmptyArray(value) {
  return !isArray(value) || value.length === 0;
}
