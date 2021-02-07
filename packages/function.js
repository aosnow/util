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
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
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
 * @param {Number} [wait=0] 需要延迟的毫秒数（默认：0，即立即调用）
 * @param {Boolean} [leading=true] 指定首次调用是否立即调用，还是延迟 wait 毫秒后调用（默认：true，即首次将立即调用）
 */
export function debounce(func, wait = 0, leading = true) {
  let timerId;
  let invokeCount = 0;

  if (!isFunction(func)) {
    throw new TypeError('[debounce] Parameter error, expected a function.');
  }

  wait = Number(wait) || 0;

  function invokeFunc() {
    func.call(this);
  }

  function invokeTimer() {
    // 场景：
    // 1、leading 为 false 的首次调用
    // 2、第二次开始的调用
    if (leading && invokeCount === 0) {
      invokeFunc();
      invokeCount++;
    }
    else {
      timerId = setTimeout(timerExpired, wait);
    }
  }

  function timerExpired() {
    if (!leading || (leading && invokeCount > 0)) {
      invokeFunc();
      invokeCount++;
    }
    clearTimeout(timerId);
    timerId = null;
  }

  function debounced() {
    if ((leading && invokeCount === 0) || !timerId) {
      invokeTimer();
    }
  }

  return debounced;
}
