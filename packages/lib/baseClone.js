// ------------------------------------------------------------------------------
// name: baseClone
// author: mudas( mschool.tech )
// created: 2021/3/27 0:37
// ------------------------------------------------------------------------------

import getAllKeys from './getAllKeys';
import { copyDataView, copyTypedArray } from './baseCopy';
import { isArray } from '../array';
import { isFunction } from '../function';
import { isNil } from '../null';
import { isObject, getTag } from '../object';

/** `Object#toString` result references. */
export const urlTag = '[object URL]',
  searchParamsTag = '[object URLSearchParams]',
  dateTag = '[object Date]',
  mapTag = '[object Map]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  arrayBufferTag = '[object ArrayBuffer]',
  objectTag = '[object Object]';

/** typedArray references. */
export const dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]';

/**
 * 深度克隆指定对象
 *
 * **注意**：该方法仅支持 <code>Array,Date,RegExp,Set,Map,URL,URLSearchParams,ArrayBuffer,
 * DataView,Int8Array,Int16Array,Int32Array,Uint8Array,Uint8ClampedArray,
 * Uint16Array,Uint32Array,Float32Array,Float64Array,Object</code> 对象的克隆。
 *
 * @param value 目标对象
 * @param parent 当前克隆层级的父对象
 * @param stack 解决循环引用的堆栈缓存
 * @return {{}|any}
 */
function baseClone(value, parent, stack) {
  let result;

  // 函数和值类型直接返回
  if (isNil(value) || isFunction(value) || !isObject(value)) {
    return value;
  }

  // 检查循环引用并返回其对应的相应对象作为引用的克隆数据
  stack || (stack = new WeakMap());
  const stacked = stack.get(value);
  if (stacked) return stacked;

  // 对当前数据类型进行检测，执行不同类型的克隆过程
  if (isArray(value)) {
    result = value.map((item) => baseClone(item, value, stack));
  }
  else {
    const tag = getTag(value);

    switch (tag) {
      case dateTag: {
        result = new Date(value.getTime());
        break;
      }
      case mapTag: {
        result = new Map();
        value.forEach(function(subValue, key) {
          result.set(key, baseClone(subValue, value, stack));
        });
        break;
      }
      case setTag: {
        result = new Set();
        value.forEach((subValue) => {
          result.add(baseClone(subValue, value, stack));
        });
        break;
      }
      case regexpTag: {
        result = new RegExp(value);
        break;
      }
      case urlTag: {
        result = new URL(value.toString());
        break;
      }
      case searchParamsTag: {
        result = new URLSearchParams(value.toString());
        break;
      }
      case arrayBufferTag: {
        result = value.slice();
        break;
      }
      case dataViewTag: {
        result = copyDataView(value);
        break;
      }
      case float32Tag:
      case float64Tag:
      case int8Tag:
      case int16Tag:
      case int32Tag:
      case uint8Tag:
      case uint8ClampedTag:
      case uint16Tag:
      case uint32Tag: {
        result = copyTypedArray(value);
        break;
      }
      case objectTag: {
        const keys = getAllKeys(value);
        result = {};

        keys.forEach(key => {
          result[key] = baseClone(value[key], value, stack);
        });
        break;
      }
      default: {
        result = value;
      }
    }
  }

  stack.set(value, result);

  return result;
}

export default baseClone;
