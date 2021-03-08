// ------------------------------------------------------------------------------
// name: empty.d
// author: mudas( mschool.tech )
// created: 2021/3/8
// ------------------------------------------------------------------------------

/**
 * 检查 value 是否是 "空" 值
 *
 * **说明：** `Javascript` 认为的 "空" 值一般包括 `0`，`null`，`undefined`，`false`，`NaN`，`空字符串`，`空数组`。
 * 另外该工具方法对 `size` 为 `0` 的 `File、Map、Set` 同样认为是 "空" 值。以及没有任何属性的 `Object` 也认为是 "空" 值。
 *
 * @param {*} value 要检查的值。
 * @return {boolean} 当为空值时返回 `true`，否则返回 `false`。
 *
 * @example
 * isEmpty(true);
 * // => false
 *
 * isEmpty(false);
 * // => true
 *
 * isEmpty(true);
 * // => false
 *
 * isEmpty('');
 * // => true
 *
 * isEmpty('');
 * // => true
 *
 * isEmpty([]);
 * // => true
 *
 * isEmpty(0);
 * // => true
 */
export declare function isEmpty(value): boolean;
