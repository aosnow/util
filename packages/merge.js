// ------------------------------------------------------------------------------
// name: merge
// author: mudas( mschool.tech )
// created: 2021/2/22 17:59
// ------------------------------------------------------------------------------

import getAllKeys from './lib/getAllKeys';
import assignValue from './lib/assignValue';
import baseClone from './lib/baseClone';
import { isFunction } from './function';
import { isPlainObject } from './object';
import { isArray } from './array';

/**
 * 递归合并 source 来源对象自身和继承的可枚举属性到 object 目标对象
 * <ul>
 * <li>数组和普通对象会递归合并，其他对象和值会被直接分配覆盖</li>
 * <li>源对象从从左到右分配</li>
 * <li>后续的来源对象属性会覆盖之前分配的属性</li>
 * <li>该方法会改变目标对象 target</li>
 * <li>source 对象字段值类型若与 target 对象字段值类型 不一致，由 source 覆盖前者，target 源数据将丢失</li>
 * </ul>
 *
 * **注意:** 这个方法仅做深度合并，合并的是值的引用（直接赋值，而非拷贝），不会起到克隆的作用。因此参与合并的对象引用值皆可能在覆盖时被影响。
 *
 * @param {Object} target 目标对象
 * @param {...Object} [source] 来源对象
 * @param {Function} customizer 自定义赋值逻辑的方法，每次比较将传入参数 (objValue, srcValue, key, object, source)
 * @returns {Object} 返回合并后的 `object`
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
export function merge(target, ...source) {
  let customizer;
  let newData;

  if (isFunction(source[source.length - 1])) customizer = source.pop();

  // 当需要合并的数据来源大于 1 个时，为避免频繁或者重复在相同的属性上调用 customizer
  // 优先使用默认合并方法，将数据源进行合并，按从右至左的方式保留最终值，以便于保障在相同的属性上只调用一次 customizer
  if (source.length > 1) {
    newData = Object.create(null);

    source.forEach(item => {
      _merge(newData, baseClone(item), assignValue);
    });
  }

  // 若只有一个数据源，只直接视其为最终值
  else {
    newData = baseClone(source[0]);
  }

  // 使用最终值，进行最后的合并
  _merge(target, newData, customizer);

  return target;
}

function _merge(target, source, customizer) {
  const assignMethod = function(objValue, srcValue, key, object, source) {
    if (srcValue !== object[key]) {
      (customizer || assignValue)(objValue, srcValue, key, object, source);
    }
  };

  if (isPlainObject(source) || isArray(source)) {
    const keys = getAllKeys(source);

    keys.forEach(key => {

      const src = source[key];
      // const dest = target[key];

      if (isPlainObject(src)) {
        // 若 dest 为非对称类型，则直接覆盖原有值
        if (target[key] === undefined || !isPlainObject(target[key])) {
          assignMethod(target[key], src, key, target, source);
        }
        else {
          Object.keys(src).forEach(childKey => {
            const destChildValue = target[key][childKey];
            if (destChildValue === undefined || (!isPlainObject(destChildValue) && !isArray(destChildValue))) {
              assignMethod(destChildValue, src[childKey], childKey, target[key], src);
            }
            else {
              _merge(destChildValue, src[childKey], assignMethod);
            }
          });
        }
      }
      else if (isArray(src)) {
        // 若 dest 为值类型，则舍弃原有值
        if (!isPlainObject(target[key]) && !isArray(target[key])) {
          assignMethod(target[key], src, key, target, source);
        }
        else {
          Object.keys(src).forEach(index => {
            const destValue = target[key][index];
            const srcValue = src[index];

            // 数组元素为复杂数据类型
            if (isPlainObject(srcValue) || isArray(srcValue)) {
              if (!isPlainObject(destValue) && !isArray(destValue)) {
                assignMethod(destValue, srcValue, index, target[key], src);
              }
              else {
                _merge(destValue, srcValue, assignMethod);
              }
            }
            // 数组元素为简单值类型
            else {
              assignMethod(destValue, srcValue, index, target[key], src);
            }
          });
        }

      }
      else {
        // 值类型直接由 srcValue 覆盖 objValue
        // isString、isNumber、isBoolean、isNull
        assignMethod(target[key], src, key, target, source);
      }

    });
  }
}
