// ------------------------------------------------------------------------------
// name: basePrototype
// author: mudas( mschool.tech )
// created: 2021/4/1 22:27
// ------------------------------------------------------------------------------

import { isObject } from '../object';

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
export function isPrototype(value) {
  const Ctor = value && value.constructor,
    proto = (typeof Ctor == 'function' && Ctor.prototype) || Object.prototype;

  return value === proto;
}

/** Built-in value references. */
export const getPrototype = Object.getPrototypeOf;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
export function baseCreate(proto) {
  if (!isObject(proto)) {
    return {};
  }
  return Object.create(proto);
}
