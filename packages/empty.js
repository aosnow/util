// ------------------------------------------------------------------------------
// name: empty
// author: mudas( mschool.tech )
// created: 2021/3/5 15:31
// ------------------------------------------------------------------------------

import { isNaN } from './number';
import { getTag } from './object';

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
export function isEmpty(value) {
  // null or undefined
  if (value == null) return true;

  if (isNaN(value)) return true;
  if (typeof value === 'boolean') return value === false; // 布尔值由其值决定业务逻辑，皆认为非空
  if (typeof value === 'number') return !value; // 0 被认为空
  if (value instanceof Error) return !value.message; // 没有内容的错误对象认为空

  switch (getTag(value)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return value.length === 0;

    // Map or Set or File
    case '[object File]':
    case '[object Map]':
    case '[object Set]': {
      return value.size === 0;
    }
    // Plain Object
    case '[object Object]': {
      return Object.keys(value).length === 0;
    }
  }

  return false;
}
