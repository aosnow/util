// ------------------------------------------------------------------------------
// name: baseMerge
// author: mudas( mschool.tech )
// created: 2021/3/29 10:25
// ------------------------------------------------------------------------------

import initCloneObject from 'lodash-es/_initCloneObject';
import assignValue from './assignValue';
import getAllKeys from './getAllKeys';
import { isObject, isPlainObject } from '../object';
import { isArrayBuffer } from '../buffer';
import { isArray, isTypedArray } from '../array';

function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    assignValue(object, key, value);
  }
}

function baseMerge(target, source, customizer, stack) {
  if (target === source) {
    return;
  }

  forEach(source, function(srcValue, key) {
    stack || (stack = new WeakMap());
    if (isObject(srcValue)) {
      baseMergeDeep(target, source, key, baseMerge, customizer, stack);
    }
    else {
      let newValue = customizer
                     ? customizer(target[key], srcValue, key, target, source, stack)
                     : undefined;

      if (newValue === undefined) newValue = srcValue;
      assignMergeValue(target, key, newValue);
    }
  }, getAllKeys);
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
export function baseMergeDeep(object, source, key, mergeFunc, customizer, stack) {
  const objValue = object[key];
  const srcValue = source[key];
  const stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }

  let newValue = customizer
                 ? customizer(objValue, srcValue, key, object, source, stack)
                 : undefined;

  let isCommon = newValue === undefined;

  if (isCommon) {
    const isArr = isArray(srcValue);
    const isBuff = !isArr && isArrayBuffer(srcValue);
    const isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;

    if (isArr || isBuff || isTyped) {}
    if (isPlainObject(srcValue)) {
      newValue = objValue;
      newValue = initCloneObject(srcValue);
    }
    else {
      isCommon = false;
    }
  }

  if (isCommon) {}
}

export function forEach(object, iteratee, keysFunc) {
  let index = -1,
    iterable = Object(object),
    props = keysFunc(object),
    length = props.length;

  while (length--) {
    const key = props[++index];
    if (iteratee(iterable[key], key, iterable) === false) {
      break;
    }
  }
  return object;
}

export default baseMerge;
