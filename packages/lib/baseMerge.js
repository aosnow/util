// ------------------------------------------------------------------------------
// name: baseMerge
// author: mudas( mschool.tech )
// created: 2021/3/29 10:25
// ------------------------------------------------------------------------------

import assignValue from './assignValue';
import getAllKeys from './getAllKeys';
import { copyArray, copyTypedArray } from './baseCopy';

import { isPrototype, getPrototype, baseCreate } from './basePrototype';
import { isObject, isPlainObject } from '../object';
import { isArrayBuffer } from '../buffer';
import { isArray, isArrayLike, isTypedArray } from '../array';
import { isFunction } from '../function';
import { isNil } from '../null';

// 数组两者合并
export const ARRAY_MERGE = 1 << 0;

// 数组后者替换前者
export const ARRAY_REPLACE = 1 << 1;

function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

function assignMergeValue(object, key, value, customizer) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    isFunction(customizer) ? customizer(object, key, value) : assignValue(object, key, value);
  }
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
export function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
         ? baseCreate(getPrototype(object))
         : {};
}

export function baseMerge(target, source, customizer, stack, ploy) {
  if (isNil(target) || isNil(source) || target === source) {
    return target;
  }

  forEach(source, function(srcValue, key) {
    stack || (stack = new WeakMap());
    if (isObject(srcValue)) { // srcValue = srouce[key]
      baseMergeDeep(target, source, key, baseMerge, customizer, stack, ploy);
    }
    else {
      assignMergeValue(target, key, srcValue, customizer);
    }
  }, getAllKeys);
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} target The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer=null] The function to customize assigned values.
 * @param {Object} [stack=null] Tracks traversed source values and their merged
 * @param {Number} [ploy=ARRAY_MERGE] merge ploy
 *  counterparts.
 */
export function baseMergeDeep(target, source, key, mergeFunc, customizer = null, stack = null, ploy = ARRAY_MERGE) {
  const objValue = target[key];
  const srcValue = source[key];
  const stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(target, key, stacked, customizer);
    return;
  }

  // 标记是否需要进行数据分析，进行逐步合并或者拷贝到 objValue
  let newValue = undefined;
  let isCommon = true;

  if (isCommon) {
    const isArr = isArray(srcValue);
    const isBuff = !isArr && isArrayBuffer(srcValue);
    const isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;

    // 数组、ArrayBuffer、TypedArray 的复制
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue) || isArrayLike(objValue)) {
        if (hasPloy(ploy, ARRAY_MERGE)) {
          newValue = isArray(objValue) ? objValue : copyArray(objValue); // 保留元素，并合并后续来源的元素
        }
        else if (hasPloy(ploy, ARRAY_REPLACE)) {
          newValue = []; // 直接用后续来源的元素创建新数组
        }
      }
      else if (isBuff) {
        isCommon = false;
        newValue = srcValue.slice();
      }
      else if (isTyped) {
        isCommon = false;
        newValue = copyTypedArray(srcValue);
      }
      else {
        newValue = [];
      }
    }

    // 普通对象类型的复制
    else if (isPlainObject(srcValue)) {
      newValue = objValue;

      // 若 srcValue 为 Object，且 objValue 为空或者不为 {} 类型，将覆盖 objValue
      // 若 objValue 为 {} 类型，将 srcValue 的属性逐个合并到 objValue 上
      if (!isPlainObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue); // 创建空容器 {}
      }
    }

    // 非常规的不可复制的数据类型，直接进行迁移
    else {
      isCommon = false;
    }
  }

  // 标记是否以 newValue 做为父级，进行递归合并数据
  if (isCommon) {
    // 递归合并对象和数组类型数据
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, customizer, stack, ploy);
    stack.delete(srcValue);
  }

  assignMergeValue(target, key, newValue, customizer);
}

export function forEach(target, iteratee, keysFunc) {
  let index = -1,
    iterable = Object(target),
    props = keysFunc(target),
    length = props.length;

  while (length--) {
    const key = props[++index];
    if (iteratee(iterable[key], key, iterable) === false) {
      break;
    }
  }
  return target;
}

/**
 * 检测指定策略值是否包含指定的策略
 * @param target 一般指 baseMerge.ploy
 * @param {number} ploy 一般为不重复的 2 指数值
 * @return {boolean}
 */
export function hasPloy(target, ploy) {
  return !!(target & ploy);
}

export default baseMerge;
