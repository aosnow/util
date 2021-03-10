// ------------------------------------------------------------------------------
// name: buffer.d
// author: mudas( mschool.tech )
// created: 2021/3/10
// ------------------------------------------------------------------------------

/**
 * 检测 `value` 是否为 Buffer 类型
 *
 * @param {Object} value 待检测的值
 * @returns {boolean}若 `value` 为 Buffer 类型返回 `true`，否则返回 `false`
 */
export function isBuffer(value): boolean;

/**
 * 检测 `value` 是否为 ArrayBuffer 类型
 *
 * **说明：** [ArrayBuffer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) 对象用来表示通用的、固定长度的原始二进制数据缓冲区
 *
 * @param {*} value 待检测的值
 * @returns {boolean} 若 `value` 为 ArrayBuffer 类型返回 `true`，否则返回 `false`
 *
 * @example
 * const buffer = new ArrayBuffer(8);
 * isArrayBuffer(buffer);
 * // => true
 */
export function isArrayBuffer(value): boolean;

/**
 * 检测 `value` 是否为 ArrayBuffer 视图（view）
 *
 * @param {*} value 待检测的值
 * @returns {boolean} 若 `value` 为 ArrayBuffer 视图类型返回 `true`，否则返回 `false`
 *
 * @example
 * isArrayBufferView();                    // false
 * isArrayBufferView([]);                  // false
 * isArrayBufferView({});                  // false
 * isArrayBufferView(null);                // false
 * isArrayBufferView(undefined);           // false
 * isArrayBufferView(new ArrayBuffer(10)); // false
 *
 * isArrayBufferView(new Uint8Array());    // true
 * isArrayBufferView(new Float32Array());  // true
 * isArrayBufferView(new Int8Array(10).subarray(0, 3)); // true
 *
 * var buffer = new ArrayBuffer(2);
 * var dv = new DataView(buffer);
 * isArrayBufferView(dv); // true
 */
export function isArrayBufferView(value): boolean;

/**
 * 检测 `value` 是否为 Stream 类型
 *
 * @param {*} value 待检测的值
 * @returns {boolean} 若 `value` 为 Stream 类型返回 `true`，否则返回 `false`
 */
export function isStream(value): boolean;
