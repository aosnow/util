// ------------------------------------------------------------------------------
// name: object
// author: mudas( mschool.tech )
// created: 2021/1/28 16:31
// ------------------------------------------------------------------------------

/**
 * 取得指定数据的原始类型（如 [object Object]）
 * @param {*} value 待检查的值
 * @return {string} 类型标识，如 `[object Object]`
 */
export declare function getTag(value): boolean;

/**
 * 检测 value 是否为 `Object`
 * [类型](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * (如 arrays, functions, objects, regexes, `new Number(0)`, 和 `new String('')`)
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
 * isObject(noop);
 * // => true
 *
 * isObject(null);
 * // => false
 */
export declare function isObject(value): boolean;

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
export declare function isPlainObject(value): boolean;

/**
 * 设置 `object` 对象中对应 `path` 属性路径上的值，如果 `path` 任何一级不存在，则创建。
 * 缺少的索引属性会创建为数组，而缺少的属性会创建为对象。
 *
 * **注意:** 这个方法会改变 `object`。
 *
 * @param {Object} object 要修改的对象。
 * @param {Array|string} path 要设置的对象路径。
 * @param {*} value 要设置的值。
 * @param {Function} [customizer] 用来定制分配的值的自定义方法（如 `customizer(objValue, key, nested):any`）
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
export function set(object: Object, path: string, value: any, customizer?: Function): Object;

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
export function get(object: Object, path: string, defaultValue?: any): any;

/**
 * 深度克隆指定对象，返回克隆后的副本
 * @param {Object} value 待检查的值
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
export function clone(value: Object): Object;
