// ------------------------------------------------------------------------------
// name: file.d
// author: mudas( mschool.tech )
// created: 2021/3/10
// ------------------------------------------------------------------------------

/**
 * 检测 `value` 是否为 File 类型
 *
 * @param {*} value 待检测的值
 * @returns {boolean} 若 `value` 为 File 类型返回 `true`，否则返回 `false`
 */
export function isFile(value): boolean;

/**
 * 检测 `value` 是否为 Blob 类型
 *
 * @param {*} value 待检测的值
 * @returns {boolean} 若 `value` 为 Blob 类型返回 `true`，否则返回 `false`
 */
export function isBlob(value): boolean;
