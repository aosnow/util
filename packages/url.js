// ------------------------------------------------------------------------------
// name: url
// author: mudas( mschool.tech )
// created: 2021/1/28 16:32
// ------------------------------------------------------------------------------

import Query from 'query-string';
import { parsingURLParams } from '@mudas/env';
import { isPlainObject } from './object';
import { isString } from './string';
import { isNil } from './null';

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
export function resetURL(url, query = null, useHistoryMode = null) {
  // 无协议地址将引起无法构造 URL 对象错误
  // 根据当前地址自动补全协议
  if (isString(url) && url.substr(0, 2) === '//') {
    const tmpURL = new URL(window.location.href);
    url = `${tmpURL.protocol}${url}`;
  }

  if (isURL(url) || isAbsoluteURL(url)) {
    const rURL = isURL(url) ? url : new URL(url);
    const rURLQuery = parsingURLParams(rURL);

    // 模式检测
    if (isNil(useHistoryMode)) {
      useHistoryMode = rURL.hash.indexOf('#') === -1;
    }

    // 设置新的，或者修改已有 query 参数
    if (isPlainObject(query)) {
      Object.keys(query).forEach(key => {
        rURLQuery[key] = query[key];
      });
    }

    // 重置 hash 中的 query 参数
    // history 模式下目标为 search
    const qs = Query.stringify(rURLQuery);
    const qsstr = qs.length > 0 ? ['?', qs].join('') : '';

    if (useHistoryMode) {
      rURL.search = qsstr;
    }

    // hash 模式下 pathname 为 /，目标为 hash 参数 “#/?x=1&y=2”
    else {
      const index = rURL.hash.indexOf('?');
      const path = rURL.hash ? rURL.hash.substring(1, index !== -1 ? index : rURL.hash.length) : '';

      rURL.hash = `#${path}${qsstr}`;
    }

    return rURL;
  }

  return null;
}
