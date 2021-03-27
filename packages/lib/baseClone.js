// ------------------------------------------------------------------------------
// name: baseClone
// author: mudas( mschool.tech )
// created: 2021/3/27 0:37
// ------------------------------------------------------------------------------

import { isArray } from '../array';
import { isPlainObject, set } from '../object';

// keyNodes = [{path:'p1', type:'object'}, {path:'p12', type:'array'}]
function _genPath(keyNodes) {
  return keyNodes.reduce((path, node) => {
    switch (node.type) {
      case 'array': {
        return `[${node.path}]`;
      }
      case 'object': {
        return `.${node.path}`;
      }
    }
    return path;
  }, '');
}

function baseClone(object, holder, keyNodes = []) {
  holder = holder || Object.create(null);
  const keys = Object.keys(object);

  keys.forEach(key => {
    const path = `${key}`;

    // 若检测当前 object[path] 为引用类型值，则递归克隆下一级，直到遇到简单值类型
    // 即先从树的最底层开始赋值，如此来将中间字段赋值为新对象，从而与源数据对象的对应字段之间断开引用连接
    const copyValue = isArray(object[path]) || isPlainObject(object[path]) ? baseClone(object[path]) : object[path];
    set(holder, path, copyValue);
  });

  return holder;
}

export default baseClone;
