## Functions

<dl>
<dt><a href="#distance">distance(value, fixed, unit)</a> ⇒ <code>string</code></dt>
<dd><p>格式化距离字段带单位输出</p>
<p>小于1000时单位为'm'，大于1000时单位为'km'</p></dd>
<dt><a href="#measureDistance">measureDistance(fromPoint, toPoint)</a> ⇒ <code>Number</code></dt>
<dd><p>测算两个经纬度之间的物理距离</p>
</dd>
</dl>

<a name="distance"></a>

## distance(value, fixed, unit) ⇒ <code>string</code>
格式化距离字段带单位输出<p>小于1000时单位为'm'，大于1000时单位为'km'</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | 要转换的距离数值（单位：米） |
| fixed | <code>Number</code> | 保留小数位数 |
| unit | <code>Object</code> | 单位名称，默认（{ m: 'm', km: 'km' }） |

**Example**  
```js
distance(2520);// => '2.5km'distance(520);// => '520m'
```
<a name="measureDistance"></a>

## measureDistance(fromPoint, toPoint) ⇒ <code>Number</code>
测算两个经纬度之间的物理距离

**Kind**: global function  
**Returns**: <code>Number</code> - 距离值（单位：米）  

| Param | Type | Description |
| --- | --- | --- |
| fromPoint | <code>Object</code> | 坐标地址1 |
| toPoint | <code>Object</code> | 坐标地址2 |

