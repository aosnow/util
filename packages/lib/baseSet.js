// ------------------------------------------------------------------------------
// name: baseSet
// author: mudas( mschool.tech )
// created: 2021/4/3 0:12
// ------------------------------------------------------------------------------

import assignValue from './assignValue';
import { isInvalidKeys } from './getAllKeys';
import isIndex from './isIndex';
import stringToPath from './stringToPath';

import { isArray } from '../array';
import { isObject } from '../object';

/**
 * 将 path 解析为 path array 返回
 *
 * 支持路径如：
 * - `'a[0].b.c'`
 * - `['a', '0', 'b', 'c']`
 * - `'a.b.c'`
 * @param {String[]|String} path 待解析路径
 * @return {String[]}
 * @private
 */
export function resolvePath(path) {
  if (isArray(path)) return path;
  return stringToPath(path);
}

export function baseGet(object, path) {
  path = resolvePath(path);

  let index = 0;
  const length = path.length;

  while (object != null && index < length) {
    object = object[path[index++]];
  }

  return (index && index === length) ? object : undefined;
}

export function baseSet(object, path, value, customizer = null) {
  if (!isObject(object)) {
    return object;
  }
  path = resolvePath(path);

  let index = -1;
  const length = path.length;
  const lastIndex = length - 1;
  let nested = object;

  while (nested != null && ++index < length) {
    const key = path[index];
    let newValue = value;

    // 若存在无效的 key 则终止操作直接返回
    if (isInvalidKeys(key)) {
      return object;
    }

    const objValue = nested[key];

    // 中级层级的自动化补全（只支持数组和对象）
    if (index !== lastIndex) {
      // lodash 的策略在于生成新的 newValue，点在“值”上，而本库策略不同，点在“设置方法”上
      // 此处根据原有策略对不存在的值设置相应的新值
      newValue = isObject(objValue) ? objValue : (isIndex(path[index + 1]) ? [] : {});
    }

    // 此处可自定义“设置方法”，如对 Vue.set 的支持
    // 当 newValue === nested[key] 时，代表已有节点且值相同，不需要进行任何操作，因此自定义方法可以如下所示：
    // function customizer(nested, key, newValue) {
    //   if (newValue !== nested[key]) Vue.set(nested, key, newValue); // 或在Vue实例中使用 this.$set
    // }
    // 如此便能在 object 已是 observer 的前提下继续保持子级的可响应特性
    customizer ? customizer(nested, key, newValue) : assignValue(nested, key, newValue);

    nested = nested[key];
  }

  return object;
}
