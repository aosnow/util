// ------------------------------------------------------------------------------
// name: physical
// author: mudas( mschool.tech )
// created: 2021/1/30 6:04
// ------------------------------------------------------------------------------

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
export declare function distance(value: number, fixed: number, unit: { m: string, km: string }): string;

/**
 * 测算两个经纬度之间的物理距离
 * @param {{lng,lat}} fromPoint 坐标地址1
 * @param {{lng,lat}} toPoint 坐标地址2
 * @return {Number} 距离值（单位：米）
 */
export declare function measureDistance(fromPoint: { lng: number, lat: number }, toPoint: { lng: number, lat: number }): number;
