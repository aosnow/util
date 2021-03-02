// ------------------------------------------------------------------------------
// name: null
// author: mudas( mschool.tech )
// created: 2021/1/28 16:31
// ------------------------------------------------------------------------------

/**
 * 检查 value 是否是 null
 * @param {*} value 待检查的值
 * @return {boolean} 如果 value 为 null，那么返回 true，否则返回 false。
 *
 * @example
 *
 * isNull(null);
 * // => true
 *
 * isNull(void 0);
 * // => false
 */
export declare function isNull(value): boolean;

/**
 * 检查 value 是否是 null 或者 undefined
 * @param {*} value 待检查的值
 * @return {boolean} 如果 value 为 null 或 undefined，那么返回 true，否则返回 false。
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
export declare function isNil(value): boolean;
