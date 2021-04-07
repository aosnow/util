// ------------------------------------------------------------------------------
// name: baseCopy
// author: mudas( mschool.tech )
// created: 2021/4/1 23:39
// ------------------------------------------------------------------------------

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
export function copyArray(source, array) {
  let index = -1;
  const length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @returns {Object} Returns the cloned data view.
 */
export function copyDataView(dataView) {
  return new dataView.constructor(dataView.buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @returns {Object} Returns the cloned typed array.
 */
export function copyTypedArray(typedArray) {
  return new typedArray.constructor(typedArray.buffer, typedArray.byteOffset, typedArray.length);
}
