// ------------------------------------------------------------------------------
// name: function
// author: mudas( mschool.tech )
// created: 2021/1/28 21:35
// ------------------------------------------------------------------------------

import { getTag, isObject } from './object';

const asyncTag = '[object AsyncFunction]';
const funcTag = '[object Function]';
const genTag = '[object GeneratorFunction]';
const proxyTag = '[object Proxy]';

/**
 * 检测 value 是否为 `Function` 对象.
 *
 * @param {*} value 待检查的值
 * @returns {boolean} 若 `value` 为函数类型则返回 `true`，否则返回 `false`.
 * @example
 *
 * isFunction(noop);
 * // => true
 *
 * isFunction(/abc/);
 * // => false
 */
export function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  const tag = getTag(value);
  return tag === funcTag || tag === genTag || tag === asyncTag || tag === proxyTag;
}

/**
 * 不执行任何操作的空函数，其返回值为 `undefined`.
 */
export function noop() {
  // No operation performed.
}

/**
 * 对指定函数进行节流调用，该函数会从上一次被调用后，计时 wait 毫秒后重新开放调用。
 * @param {Function} func 需要节流的函数（若需要对 func 进行传参，请进行二次包装成无需传参的函数壳）
 * @param {Number} [wait=6000] 需要延迟的毫秒数（默认：600ms）
 * @param {Boolean} [leading=true] 指定 func 是否立即调用，还是延迟 wait 毫秒后调用（默认：true，即立即调用）
 * @return {Function}
 */
export function debounce(func, wait = 600, leading = true) {
  let timerId;
  let lastTime = 0;

  if (!isFunction(func)) {
    throw new TypeError('[debounce] Parameter error, expected a function.');
  }

  wait = Number(wait) || 0;

  function invokeFunc() {
    if (Date.now() - lastTime >= wait) {
      func.call(debounced);
      lastTime = Date.now();
    }
  }

  function invokeTimer() {
    if (timerId) return;
    timerId = setTimeout(timerExpired, wait);
    debounced.timing = true;
  }

  function timerExpired() {
    if (!leading && debounced.timing) invokeFunc();
    clearTimeout(timerId);
    timerId = null;
    debounced.timing = false;
  }

  function debounced() {
    if (leading && !debounced.timing) invokeFunc();
    invokeTimer();
    console.warn(timerId);
  }

  return debounced;
}
