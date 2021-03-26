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
export function isURL(value) {
  return typeof URL !== 'undefined' && value instanceof URL;
}

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
export function isURLSearchParams(value) {
  return typeof URLSearchParams !== 'undefined' && value instanceof URLSearchParams;
}

/**
 * 检测 value 是否为 Base64 格式的 DataURL （即 base64 图片）
 * @param {*} value 要检查的值。
 * @return {boolean}
 */
export function isDataURL(value) {
  return /^data:image\/\w+;base64/i.test(value);
}

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
 * isAbsoluteURL('//xxx.com/path');
 * // => true
 *
 * isAbsoluteURL('/upload/xxx.jpg');
 * // => false
 *
 */
export function isAbsoluteURL(value) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//"
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(value);
}

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
export function isIpURL(value) {
  return isAbsoluteURL(value) && /(\d{1,3}\.){3}\d{1,3}/.test(value);
}

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
export function isRelativeURL(value) {
  return /^[\/\\]?([0-9a-z-_.]+[\/\\])+/i.test(value);
}

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
export function mergeURL(rootURL, ...otherURL) {
  return otherURL.reduce((root, url) => _mergeURL(root, url), rootURL);
}

function _mergeURL(a, b) {
  const ua = `${a}`.replace(/\/+$/, '');
  const ub = `/${b}`.replace(/^\/{2,}/, '/');
  return `${ua}${ub}`;
}
