// ------------------------------------------------------------------------------
// name: currency
// author: mudas( mschool.tech )
// created: 2021/1/30 6:06
// ------------------------------------------------------------------------------

import Currence from 'currency.js';

/**
 * 格式化数字为货币格式
 * @param {number|string} value 原始数据
 * @param {boolean} [removeTrailingZeros=false] 是否删除末尾补位的0，如“￥5.00”会得到“￥5”
 * @param {string} [symbol=''] 是否输出带符号的货币数值
 * @return {string}
 */
export function currency(value, removeTrailingZeros = false, symbol = '') {
  const option = { symbol };
  let result = Currence(value).format(option);
  if (removeTrailingZeros) result = result.replace(/\.?0{1,2}$/g, '');
  return result;
}

export { Currence as currencejs };
