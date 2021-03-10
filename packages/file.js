// ------------------------------------------------------------------------------
// name: file
// author: mudas( mschool.tech )
// created: 2021/3/10 10:58
// ------------------------------------------------------------------------------

import { getTag } from './object';

/**
 * 检测 `value` 是否为 File 类型
 *
 * @param {*} value 待检测的值
 * @returns {boolean} 若 `value` 为 File 类型返回 `true`，否则返回 `false`
 */
export function isFile(value) {
  return getTag(value) === '[object File]';
}

/**
 * 检测 `value` 是否为 Blob 类型
 *
 * @param {*} value 待检测的值
 * @returns {boolean} 若 `value` 为 Blob 类型返回 `true`，否则返回 `false`
 */
export function isBlob(value) {
  return getTag(value) === '[object Blob]';
}
