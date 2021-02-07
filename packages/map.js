// ------------------------------------------------------------------------------
// name: physical
// author: mudas( mschool.tech )
// created: 2021/1/30 6:04
// ------------------------------------------------------------------------------

import { toFixed } from './number';

/**
 * 格式化距离字段带单位输出
 * <p>小于1000时单位为'm'，大于1000时单位为'km'</p>
 * @param {Number} value 要转换的距离数值（单位：米）
 * @param {Number} fixed 保留小数位数
 * @param {Object} unit 单位名称，默认（{ m: 'm', km: 'km' }）
 * @return {string}
 *
 * @example
 * distance(2520);
 * // => '2.5km'
 *
 * distance(520);
 * // => '520m'
 */
export function distance(value, fixed = 1, unit = { m: 'm', km: 'km' }) {
  return value < 1000 ? `${value >> 0}${unit.m}` : `${toFixed(value * 0.001, fixed)}${unit.km}`;
}

/**
 * 测算两个经纬度之间的物理距离
 * @param {{lng,lat}} fromPoint 坐标地址1
 * @param {{lng,lat}} toPoint 坐标地址2
 * @return {Number} 距离值（单位：米）
 */
export function measureDistance(fromPoint, toPoint) {
  const EARTH_RADIUS = 6378137;

  const startLongitude = fromPoint.lng;
  const startLatitude = fromPoint.lat;
  const endLongitude = toPoint.lng;
  const endLatitude = toPoint.lat;

  const radLatitude1 = startLatitude * Math.PI / 180.0;
  const radLatitude2 = endLatitude * Math.PI / 180.0;

  const a = Math.abs(radLatitude1 - radLatitude2);
  const b = Math.abs(startLongitude * Math.PI / 180.0 - endLongitude * Math.PI / 180.0);

  // Math.pow 用 ** 替代
  let s = 2 * Math.asin(
    Math.sqrt((Math.sin(a / 2) ** 2) + Math.cos(radLatitude1) * Math.cos(radLatitude2) * (Math.sin(b / 2) ** 2))
  );

  s *= EARTH_RADIUS;

  // Math.round(s * 10000) / 10000;
  return toFixed(s, 4); // 返回距离单位是米
}
