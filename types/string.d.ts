// ------------------------------------------------------------------------------
// name: string.repeat
// author: 喵大斯( mschool.tech )
// created: 2019/6/26 21:04
// ------------------------------------------------------------------------------

/**
 * 重复字符串指定的次数
 * @param {String} input 输入源
 * @param {Number} [size] 需要重复的次数
 * @return {String}
 *
 * @example
 *
 * repeat('a');
 * // => 'aaa'
 *
 * repeat('good!');
 * // => 'good!good!good!'
 */
export declare function repeat(input: string, size: number): string;

/**
 * 去除字符串首尾的空格
 * @param {String} input 输入源
 * @return {String}
 *
 * @example
 *
 * trim(' a bc   ');
 * // => 'a bc'
 */
export declare function trim(input: string): string;

/**
 * 检查 value 是否是原始字符串String或者对象。
 *
 * @param {*} value 待检查的值
 * @returns {boolean} 如果 value 为一个字符串，那么返回 true，否则返回 false。
 * @example
 *
 * isString('abc');
 * // => true
 *
 * isString(1);
 * // => false
 */
export declare function isString(value): boolean;

/**
 * 转换字符串 value 为[驼峰](https://en.wikipedia.org/wiki/CamelCase)写法
 * @param {string} [value=''] 要转换的字符串
 * @returns {string} 返回驼峰写法的字符串
 * @example
 *
 * camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * camelCase('__FOO_BAR__');
 * // => 'fooBar'
 *
 * camelCase('fooBar');
 * // => 'fooBar'
 */
export declare function camelCase(value): string;

/**
 * 转换 value 为 [中横线](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles)写法
 * @param {string} [value=''] 要转换的字符串
 * @returns {string} 返回转换后的字符串
 * @example
 *
 * kebabCase('Foo Bar');
 * // => 'foo-bar'
 *
 * kebabCase('fooBar');
 * // => 'foo-bar'
 *
 * kebabCase('__FOO_BAR__');
 * // => 'foo-bar'
 */
export declare function kebabCase(value): string;

/**
 * 转换 value 为 [下划线](https://en.wikipedia.org/wiki/Snake_case)写法
 * @param {string} [value=''] 要转换的字符串
 * @returns {string} 返回转换后的字符串
 * @example
 *
 * snakeCase('Foo Bar');
 * // => 'foo_bar'
 *
 * snakeCase('fooBar');
 * // => 'foo_bar'
 *
 * snakeCase('--FOO-BAR--');
 * // => 'foo_bar'
 */
export declare function snakeCase(value): string;

/**
 * 生成 sha1 乱码串
 * @param {String|Number|Boolean} [input='']
 * @param {Boolean} [random=true] 默认生成随机串（每次结果不同）
 * @return {String} sha格式乱码串
 *
 * @example
 *
 * hash();
 * => 'ee7f2e9a51ec9497e3a7421dbdfb85a6a641205b'
 *
 * hash(false);
 * => 'ee7f2e9a51ec9497e3a7421dbdfb85a6a641205b'
 */
export function hash(input?: string, random?: boolean): string;
