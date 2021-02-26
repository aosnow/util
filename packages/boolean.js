// ------------------------------------------------------------------------------
// name: boolean
// author: mudas( mschool.tech )
// created: 2021/1/28 16:31
// ------------------------------------------------------------------------------

import { isNaN } from './number';

/**
 * 检查 value 是否是原始 Boolean 型
 * @param {*} value 要检查的值。
 * @return {boolean}
 *
 * @example
 * isBoolean(true);
 * // => true
 *
 * isBoolean(false);
 * // => true
 *
 * isBoolean(0);
 * // => false
 */
export function isBoolean(value) {
  return typeof value === 'boolean';
}

/**
 * 检查 value 是否是 `Javascript` 认为的 false 值（包括 null,undefinded,false,NaN,空字符串，空数组）
 * @param {*} value 要检查的值。
 * @return {boolean}
 *
 * @example
 * isFalse(true);
 * // => false
 *
 * isFalse(false);
 * // => true
 *
 * isFalse('');
 * // => true
 *
 * isFalse([]);
 * // => true
 *
 * isFalse(0);
 * // => false
 */
export function isFalse(value) {
  return value === null ||
         value === undefined ||
         value === false ||
         isNaN(value) ||
         (typeof value === 'string' && value.length === 0) ||
         (Array.isArray(value) && value.length === 0);
}
