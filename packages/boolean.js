// ------------------------------------------------------------------------------
// name: boolean
// author: mudas( mschool.tech )
// created: 2021/1/28 16:31
// ------------------------------------------------------------------------------

// import { isNaN } from './number';

/**
 * 检查 value 是否是原始 Boolean 型
 * @param value
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
