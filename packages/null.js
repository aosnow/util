// ------------------------------------------------------------------------------
// name: null
// author: mudas( mschool.tech )
// created: 2021/1/28 16:31
// ------------------------------------------------------------------------------

/**
 * 检查 value 是否是 null
 * @param value
 * @return {boolean}
 *
 * @example
 *
 * isNull(null);
 * // => true
 *
 * isNull(void 0);
 * // => false
 */
export function isNull(value) {
  return value === null;
}

/**
 * 检查 value 是否是 null 或者 undefined
 * @param value
 * @return {boolean} 如果 value 为null 或 undefined，那么返回 true，否则返回 false。
 *
 * @example
 *
 * isNil(null);
 * // => true
 *
 * isNil(void 0);
 * // => true
 *
 * isNil(NaN);
 * // => false
 */
export function isNil(value) {
  return value === undefined || value === null;
}
