// ------------------------------------------------------------------------------
// name: getAllKeys
// author: mudas( mschool.tech )
// created: 2021/3/26 23:49
// ------------------------------------------------------------------------------

const invalidObjectKeys = [
  '__ob__', // vue Observer
  '__proto__', // Object prototype
  'prototype', // Object prototype
  'constructor' // Object constructor
];

/**
 * 是否为无效或不可操作的 key
 * @param key
 * @returns {boolean}
 */
export function isInvalidKeys(key) {
  return invalidObjectKeys.indexOf(key) !== -1;
}

export function getAllKeys(value) {
  if (Array.isArray(value)) {
    let length = value.length;
    const keys = [];
    while (length--) keys.push(length);
    return keys;
  }
  else {
    // Reflect.ownKeys 方法返回一个由目标对象自身的属性键组成的数组。
    // 它的返回值等同于Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))。
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
    let keys = Reflect.ownKeys(value);

    // keys 过滤掉 __ob__、__proto__ 等特殊属性
    return keys.filter(key => !isInvalidKeys(key));
  }
}

export default getAllKeys;
