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
 * 将对象所有的 key 转换为指定的命名方式
 * - `'snake'` - 将所有参数转换为 `'下划线'` 命名方式，如 `foo_bar`
 * - `'camel'` - 将所有参数转换为 `'驼峰法'` 命名方式，如 `fooBar`
 * - `'kebab'` - 将所有参数转换为 `'中横线'` 命名方式，如 `foo-bar`
 * @param {object} object 参数数据集合
 * @param {string} [mode='snake'] 需要转换的目标模式
 * @example
 * const o = {a_b:'', aC:''};
 *
 * transformCase(o);
 * // => {a_b:'', a_c:''}
 *
 * transformCase(o, 'camel');
 * // => {aB:'', aC:''}
 *
 * transformCase(o, 'kebab');
 * // => {'a-b':'', 'a-c':''}
 */
export function transformCase(object: any, mode?: 'snake' | 'camel' | 'kebab');
