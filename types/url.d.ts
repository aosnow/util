// ------------------------------------------------------------------------------
// name: url
// author: mudas( mschool.tech )
// created: 2021/1/28 16:32
// ------------------------------------------------------------------------------

/**
 * 检测 `value` 是否为 URL 对象类型
 *
 * @param {*} value 待检测的值
 * @returns {boolean} 若 `value` 为 URL 对象类型返回 `true`，否则返回 `false`
 *
 * @example
 * const url = new URL('http://www.example.com/dogs');
 * isURL(url);
 * // => true
 */
export function isURL(value): boolean;

/**
 * 检测 `value` 是否为 URLSearchParams 对象类型
 *
 * @param {*} value 待检测的值
 * @returns {boolean} 若 `value` 为 URLSearchParams 对象类型返回 `true`，否则返回 `false`
 *
 * @example
 * const url = new URL('http://www.example.com/dogs?id=123');
 * isURLSearchParams(url.searchParams);
 * // => true
 *
 * console.log(url.searchParams.get("id"));
 * // => '123'
 */
export function isURLSearchParams(value): boolean;

/**
 * 检测 value 是否为 Base64 格式的 DataURL （即 base64 图片）
 * @param {*} value 要检查的值。
 * @return {boolean}
 */
export declare function isDataURL(value): boolean;

/**
 * 检测 value 是否是 绝对地址（如以 http 开头的网址）
 * @param {*} value 要检查的值。
 * @return {boolean}
 *
 * @example
 * isAbsoluteURL('http://www.xxx.com');
 * // => true
 *
 * isAbsoluteURL('ftp://200.0.0.1/xxx');
 * // => true
 *
 * isAbsoluteURL('/upload/xxx.jpg');
 * // => false
 *
 */
export declare function isAbsoluteURL(value): boolean;

/**
 * 检测 value 是否是 ip 地址开始的 URL（如以 ip 开头的网址）
 * @param {*} value 要检查的值。
 * @return {boolean}
 *
 * @example
 * isIpURL('http://127.0.0.1/path');
 * // => true
 *
 * isIpURL('ftp://200.0.0.1/path');
 * // => true
 *
 * isIpURL('//172.16.8.6/path');
 * // => true
 *
 * isIpURL('http://www.xxx.com');
 * // => false
 */
export function isIpURL(value): boolean;

/**
 * 检测 value 是否是 相对地址（如以 './','../','/','目录名' 开头的网址）
 * @param {*} value 要检查的值。
 * @return {boolean}
 *
 * @example
 * isRelativeURL('a/b/c/i.html');
 * // => true
 *
 * isRelativeURL('a/b/c/q?k=123');
 * // => true
 *
 * isRelativeURL('../a/b/c');
 * // => true
 *
 * isRelativeURL('//a.com/b/c');
 * // => false
 */
export function isRelativeURL(value): boolean;

/**
 * 合并多个URL部分为完整的 URL 地址
 * @param {String} rootURL 如 'http://img.xxx.com'
 * @param {String} otherURL 如 '2021-01-30','upload/xxx.jpg'
 * @return {String}
 *
 * @example
 * mergeURL('http://img.xxx.com', '2021-01-30', 'upload/xxx.jpg');
 * // => 'http://img.xxx.com/2021-01-30/upload/xxx.jpg'
 *
 * mergeURL('2021-01-30', 'upload/xxx.jpg');
 * // => '2021-01-30/upload/xxx.jpg'
 */
export declare function mergeURL(rootURL: string, ...otherURL: string[]): string;

/**
 * 解析并设置指定的 query 参数到指定的 url
 * @param {string|URL} url 绝对地址
 * @param {object} [query=null] 需要设置的 query 数据集合
 * @param {boolean|null} [useHistoryMode=null] 是否使用 history 路由模式（若省略，则自动从 url 检测是否包含 # 来判断）
 * @return {URL|null} 若 url 为非 URL 对象，也不为绝对地址，则返回 null
 * @example
 * resetURL('http://www.baidu.com/?k=xxx', {a:1,b:2});
 * // => URL { href: "http://www.baidu.com/?a=1&b=2&k=xxx", search: "?a=1&b=2&k=xxx", ... }
 *
 * resetURL('http://www.baidu.com/#/?k=xxx', {a:1,b:2});
 * // => URL { hash: "#/?a=1&b=2&k=xxx", href: "http://www.baidu.com/#/?a=1&b=2&k=xxx", search: "", ... }
 */
export function resetURL(url: string | URL, query?: object | null, useHistoryMode?: boolean | null): URL | null
