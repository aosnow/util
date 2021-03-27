// ------------------------------------------------------------------------------
// name: getAllKeys
// author: mudas( mschool.tech )
// created: 2021/3/26 23:49
// ------------------------------------------------------------------------------

import { isArray } from '../array';
import { isPlainObject } from '../object';

function _arrayKey(key) {
  return `['${key}']`;
}

function _objectKey(key) {
  return `.${key}`;
}

function getAllKeys(value, parentKey = '') {
  const holder = [];
  const keys = Object.keys(value);

  // 本级 keys
  holder.push(...keys);
  // holder.push(...(keys.slice().map(item => {
  //   if (!parentKey) return item;
  //
  //   const keyType = isArray(value[item]) ? _arrayKey : _objectKey;
  //   return `${parentKey}${keyType(item)}`;
  // })));

  // 尝试测试下级类型
  keys.forEach(key => {
    let keyPath = [key];
    if (parentKey) keyPath.unshift(parentKey);
    keyPath = keyPath.join('.');
    console.warn(keyPath);

    if (isArray(value[key])) {
      holder.push(...getAllKeys(value[key], `${keyPath}`));
    }
    else if (isPlainObject(value[key])) {
      holder.push(...getAllKeys(value[key], `${keyPath}`));
    }
  });

  return holder;
}

export default getAllKeys;
