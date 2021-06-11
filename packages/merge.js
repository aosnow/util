// ------------------------------------------------------------------------------
// name: merge
// author: mudas( mschool.tech )
// created: 2021/2/22 17:59
// ------------------------------------------------------------------------------

import baseMerge, { ARRAY_MERGE, ARRAY_REPLACE } from './lib/baseMerge';
import { isNumber } from './number';
import { isFunction } from './function';

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
 * @param {Function} [customizer=null] 自定义赋值逻辑的方法，每次比较将传入参数 customizer(target, key, newValue)
 * @param {Number} [ploy=ARRAY_MERGE] 自定义合并策略（目前仅支持指定数组合并策略）
 * @returns {Object} 返回合并后的 `object`
 * @example
 * import {merge, ARRAY_REPLACE} from '@mudas/util';
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
 *
 * // use ploy
 * merge(object, other, ARRAY_REPLACE);
 * // => { 'a': [{ 'c': 3 }, { 'e': 5 }] }
 */
function merge(target, ...source) {
  let customizer;
  let ploy;

  if (isNumber(source[source.length - 1])) ploy = source.pop();
  if (isFunction(source[source.length - 1])) customizer = source.pop();

  source.forEach(item => {
    baseMerge(target, item, customizer, null, ploy);
  });

  return target;
}

export { merge, ARRAY_MERGE, ARRAY_REPLACE };
