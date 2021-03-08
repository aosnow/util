// ------------------------------------------------------------------------------
// name: assignValue
// author: mudas( mschool.tech )
// created: 2021/3/5 18:20
// ------------------------------------------------------------------------------

function assignValue(objValue, srcValue, key, object, source) {
  if (key === '__proto__' && Object.defineProperty) {
    Object.defineProperty(object, key, {
      configurable: true,
      enumerable: true,
      value: srcValue,
      writable: true
    });
  }
  else {
    object[key] = srcValue;
  }
}

export default assignValue;
