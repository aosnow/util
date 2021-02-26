## Functions

<dl>
<dt><a href="#isDate">isDate(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检查 value 是否是 Date 对象。</p>
</dd>
<dt><a href="#parseTime">parseTime(value)</a> ⇒ <code>Object</code></dt>
<dd><p>解析字符串时间</p>
</dd>
<dt><a href="#genDate">genDate(option)</a> ⇒ <code>Date</code></dt>
<dd><p>根据指定的自选参数，生成日期对象</p>
</dd>
<dt><a href="#betweenDate">betweenDate(businessTime, [now])</a> ⇒ <code>boolean</code></dt>
<dd><p>检测当前时间是否在指定时间范围内（毫秒级对比，一般用于检测当前时间是否在店铺营业时间范围内）</p>
</dd>
<dt><a href="#dateformat">dateformat([dateInfo], [format])</a> ⇒ <code>string</code></dt>
<dd><p>格式化日期信息为指定格式</p>
</dd>
<dt><a href="#times">times(ms, [all], [unit])</a></dt>
<dd><p>将毫秒转化为相应的时间字符串</p>
</dd>
</dl>

<a name="isDate"></a>

## isDate(value) ⇒ <code>boolean</code>
检查 value 是否是 Date 对象。

**Kind**: global function  
**Returns**: <code>boolean</code> - 如果 value 是一个日期对象，那么返回 true，否则返回 false。  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 要检查的值。 |

<a name="parseTime"></a>

## parseTime(value) ⇒ <code>Object</code>
解析字符串时间

**Kind**: global function  
**Returns**: <code>Object</code> - 年，月，日，小时，分钟，秒数  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>String</code> | 如：06:00或者06:00:00（同时支持 '2021-02-01 06:00:00' 的完整日期字符串） |

<a name="genDate"></a>

## genDate(option) ⇒ <code>Date</code>
根据指定的自选参数，生成日期对象

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| option |  | 日期时间参数 |
| [option.year] | <code>Number</code> | 年 |
| [option.month] | <code>Number</code> | 月 |
| [option.day] | <code>Number</code> | 日 |
| [option.hour] | <code>Number</code> | 小时 |
| [option.minute] | <code>Number</code> | 分钟 |
| [option.second] | <code>Number</code> | 秒 |

<a name="betweenDate"></a>

## betweenDate(businessTime, [now]) ⇒ <code>boolean</code>
检测当前时间是否在指定时间范围内（毫秒级对比，一般用于检测当前时间是否在店铺营业时间范围内）

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| businessTime | <code>String</code> \| <code>Array.&lt;String&gt;</code> |  | 指定时间范围（如 '00:00~23:59'） |
| [now] | <code>Number</code> \| <code>Date</code> | <code>Date.now()</code> | 待检测目标时间（默认取当前时间） |

**Example**  
```js
betweenDate('08:08:59~23:08:59');
// => true // now at '10:08:59'
```
<a name="dateformat"></a>

## dateformat([dateInfo], [format]) ⇒ <code>string</code>
格式化日期信息为指定格式

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [dateInfo] | <code>String</code> \| <code>Number</code> \| <code>Date</code> | <code></code> | 日期数据信息 |
| [format] | <code>String</code> | <code>&#x27;YYYY-MM-DD&#x27;</code> | 目标格式（默认：'YYYY-MM-DD'，其它：'HH:mm:ss'），具体参考[format](https://dayjs.gitee.io/docs/zh-CN/display/format) |

**Example**  
```js
dateformat('2021/02/20 08:08:59');
// => 2021-02-20

dateformat('2021/02/20 08:08:59', 'YYYY-MM-DD HH:mm:ss');
// => 2021-02-20 08:08:59

dateformat(1611961835705, 'YYYY-MM-DD HH:mm:ss');
// => 2021-01-30 07:10:35
```
<a name="times"></a>

## times(ms, [all], [unit])
将毫秒转化为相应的时间字符串

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| ms | <code>Number</code> |  | 毫秒数 |
| [all] | <code>Boolean</code> | <code>true</code> | 是否输出所有符合条件的数值（若为 false，则只取按“天>小时>分钟>秒”的优先级显示后缀） |
| [unit] | <code>Object</code> | <code>{ day: &#x27;天&#x27;, hour: &#x27;小时&#x27;, minute: &#x27;分&#x27;, second: &#x27;秒&#x27; }</code> | 默认后缀单位 |

**Example**  
```js
times(9000760);
// => '2小时30分0秒'

times(9000760, false);
// => '3小时'
```
