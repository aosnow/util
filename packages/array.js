// ------------------------------------------------------------------------------
// name: array
// author: mudas( mschool.tech )
// created: 2021/1/28 16:32
// ------------------------------------------------------------------------------

import {
  float32Tag, float64Tag,
  int16Tag, int32Tag, int8Tag,
  uint16Tag, uint32Tag, uint8ClampedTag, uint8Tag
} from './lib/baseClone';

import { isNil } from './null';
import { isFunction } from './function';
import { isObject, getTag } from './object';

/** Used to identify `toStringTag` values of typed arrays. */
const typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = true;
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = true;
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = true;
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = true;
typedArrayTags[uint32Tag] = true;

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
 * 检查 value 是否是类数组。 如果一个值被认为是类数组，那么它不是一个函数，并且 `value.length` 是个整数，大于等于 `0`，小于或等于 `Number.MAX_SAFE_INTEGER`。
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
 * 检查 value 是否是TypedArray。
 *
 * @param {*} value 要检查的值。
 * @returns {boolean} 如果 value 为一个typed array，那么返回 true，否则返回 false。
 * @example
 *
 * isTypedArray(new Uint8Array);
 * // => true
 *
 * isTypedArray([]);
 * // => false
 */
export function isTypedArray(value) {
  return isObject(value)
         && isArrayLike(value)
         && !!typedArrayTags[getTag(value)];
}
