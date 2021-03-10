// ------------------------------------------------------------------------------
// name: object
// author: mudas( mschool.tech )
// created: 2021/1/28 16:31
// ------------------------------------------------------------------------------

import isIndex from './lib/isIndex';
import stringToPath from './lib/stringToPath';
import assignValue from './lib/assignValue';
import { isArray } from './array';

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
  return value !== null && value !== undefined && typeof value === 'object';
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
 * @param {*} [defaultValue] 如果解析 `path` 的值是 `undefined` ，则返回该指定的默认值。
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
export function get(object, path, defaultValue) {
  const result = !isObject(object) ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * 将 path 解析为 path array 返回
 *
 * 支持路径如：
 * - `'a[0].b.c'`
 * - `['a', '0', 'b', 'c']`
 * - `'a.b.c'`
 * @param {String[]|String} path 待解析路径
 * @return {String[]}
 * @private
 */
function _resolvePath(path) {
  if (isArray(path)) return path;
  return stringToPath(path);
}

function _baseGet(object, path) {
  path = _resolvePath(path);

  let index = 0;
  const length = path.length;

  while (object != null && index < length) {
    object = object[path[index++]];
  }

  return (index && index === length) ? object : undefined;
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
 * @param {Function} [customizer] 用来定制分配的值的自定义方法
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
export function set(object, path, value, customizer) {
  return object == null ? object : _baseSet(object, path, value, customizer);
}

function _baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = _resolvePath(path);

  let index = -1;
  const length = path.length;
  const lastIndex = length - 1;
  let nested = object;

  while (nested != null && ++index < length) {
    const key = path[index];
    let newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    const objValue = nested[key];
    if (index !== lastIndex) {
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(objValue, newValue, key, nested, null);
    nested = nested[key];
  }

  return object;
}
