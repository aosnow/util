// ------------------------------------------------------------------------------
// name: getAllKeys
// author: mudas( mschool.tech )
// created: 2021/3/26 23:49
// ------------------------------------------------------------------------------

const invalidObjectFields = [
  '__ob__', // vue Observer
  '__proto__', // Object prototype
  'constructor' // Object constructor
];

function getAllKeys(value) {
  // Reflect.ownKeys 方法返回一个由目标对象自身的属性键组成的数组。
  // 它的返回值等同于Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))。
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
  let keys = Reflect.ownKeys(value);

  // keys 过滤掉 __ob__、__proto__ 等特殊属性
  return keys.filter(key => invalidObjectFields.indexOf(key) === -1);
}

export default getAllKeys;
