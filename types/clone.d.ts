// ------------------------------------------------------------------------------
// name: clone.d
// author: mudas( fnd.cool )
// created: 2021/6/24
// ------------------------------------------------------------------------------

/**
 * 深度克隆指定对象，返回克隆后的副本
 * @param {Object} value 待检查的值
 * @return {Object} 与源对象 value 无关的副本对象
 *
 * @example
 * var object = { 'a': 1 };
 *
 * var obj2 = clone(object);
 * obj2.a = 2;
 *
 * console.log(object.a, obj2.a);
 * // => 1  2
 */
export function clone(value: Object): Object;
