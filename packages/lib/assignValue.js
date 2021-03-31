// ------------------------------------------------------------------------------
// name: assignValue
// author: mudas( mschool.tech )
// created: 2021/3/5 18:20
// ------------------------------------------------------------------------------

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  if (key === '__proto__' && Object.defineProperty) {
    Object.defineProperty(object, key, {
      configurable: true,
      enumerable: true,
      value: value,
      writable: true
    });
  }
  else {
    object[key] = value;
  }
}

export default assignValue;
