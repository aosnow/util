// ------------------------------------------------------------------------------
// name: clone
// author: mudas( fnd.cool )
// created: 2021/5/12 16:29
// ------------------------------------------------------------------------------

import baseClone from './lib/baseClone';

/**
 * 深度克隆指定对象，返回克隆后的副本
 *
 * **注意**：该方法仅支持 <code>Array,Date,RegExp,Set,Map,URL,URLSearchParams,ArrayBuffer,
 * DataView,Int8Array,Int16Array,Int32Array,Uint8Array,Uint8ClampedArray,
 * Uint16Array,Uint32Array,Float32Array,Float64Array,Object</code> 对象的克隆。
 *
 * @param {Object} value 待克隆的对象
 * @return {Object} 与源对象 value 无关的副本对象
 *
 * @example
 * var object = { 'a': 1 };
 *
 * var obj2 = clone(object);
 * obj2.a = 2;
 *
 * console.log(object.a, obj2.a);
 * // => 1  2
 */
export function clone(value) {
  return baseClone(value);
}
