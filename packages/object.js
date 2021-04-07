// ------------------------------------------------------------------------------
// name: object
// author: mudas( mschool.tech )
// created: 2021/1/28 16:31
// ------------------------------------------------------------------------------

import baseClone from './lib/baseClone';
import { baseGet, baseSet } from './lib/baseSet';

const toString = Object.prototype.toString;
const tag = '[object Object]';

/**
 * 取得指定数据的原始类型（如 [object Object]）
 * @param {*} value 待检查的值
 * @return {string} 类型标识，如 `[object Object]`
 */
export function getTag(value) {
  return toString.call(value);
}

/**
 * 检测 value 是否为 `Object`
 * [类型](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * (如 `arrays`, `dates`, `objects`, `regexes`, `new Number(0)`, 和 `new String('')`，但不包含 `null`、`undefined`、`function`)
 *
 * @param {*} value 待检查的值
 * @returns {boolean} 如果 value 是一个 Object 类型，那么返回 true，否则返回 false。
 * @example
 *
 * isObject({});
 * // => true
 *
 * isObject([1, 2, 3]);
 * // => true
 *
 * isObject(new Date());
 * // => true
 *
 * isObject(noop);
 * // => false
 *
 * isObject(null);
 * // => false
 */
export function isObject(value) {
  return value !== null && typeof value === 'object';
}

/**
 * 检查 value 是否是普通对象。 也就是说该对象由 Object 构造函数创建，或者 prototype 为 null 。
 * @param {*} value 待检查的值
 * @return {boolean} 如果 value 是一个普通对象，那么返回 true，否则返回 false。
 *
 * @example
 * function Foo() {
 *  this.a = 1;
 * }
 *
 * isPlainObject(new Foo);
 * // => false
 *
 * isPlainObject([1, 2, 3]);
 * // => false
 *
 * isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * isPlainObject(Object.create(null));
 * // => true
 */
export function isPlainObject(value) {
  if (!isObject(value) || getTag(value) !== tag) return false;

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}

/**
 * 根据 `object` 对象的 `path` 路径获取值。 如果解析 `value` 是 `undefined` 会以 `defaultValue` 取代。
 *
 * **说明：** 该方法主要目的在于，直接通过 `path` 访问 `object` 属性值，很可能 `path` 的中间层属性就已经是 `undefined`，无法达到目标层级得到对应属性值，
 * 而报错误 `TypeError: Cannot read property 'xxx' of undefined`，这在 `vue` 项目的 `vuex` 属性访问时极为常见。
 *
 * @param {Object} object 要检索的对象。
 * @param {String[]|String} path 要获取属性的路径。
 * @param {*} [defaultValue=null] 如果解析 `path` 的值是 `undefined` ，则返回该指定的默认值。
 * @returns {*} 返回解析 `path` 的值。
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * get(object, 'a[0].b.c');
 * // => 3
 *
 * get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * get(object, 'a.b.c', 'default');
 * // => 'default'
 */
export function get(object, path, defaultValue = null) {
  const result = !isObject(object) ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * 设置 `object` 对象中对应 `path` 属性路径上的值，如果 `path` 任何一级不存在，则创建。
 * 缺少的索引属性会创建为数组，而缺少的属性会创建为对象。
 *
 * **注意:** 这个方法会改变 `object`。
 *
 * @param {Object} object 要修改的对象。
 * @param {Array|string} path 要设置的对象路径。
 * @param {*} value 要设置的值。
 * @param {Function} [customizer=null] 用来定制分配的值的自定义方法，如 `customizer(nested, key, newValue)`，当 `newValue !== nested[key]` 时代表需要设置新的属性值，
 * 此时可以使用 Vue.set 来设置新的值以支持动态 响应特性（请注意，这与 lodash 的 set 使用策略完全不同）
 * @returns {Object} 返回被修改后的 `object`。
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
export function set(object, path, value, customizer = null) {
  return object == null ? object : baseSet(object, path, value, customizer);
}

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
