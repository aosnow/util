## Functions

<dl>
<dt><a href="#isNumber">isNumber(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检查 value 是否是原始 Number 数值型 或者 数值常量对象</p>
</dd>
<dt><a href="#isNumeric">isNumeric(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检查 value 是否为全数字内容</p>
<p>注：该方法包含所有 isNumber(value) 为 true 的情况，以及字符串类型的数字。即该方法比 isNumber 的条件更宽泛，可用于检测任意数字内容出现的场景。</p>
<p>注：NaN 也属于一个合法的数值型。</p></dd>
<dt><a href="#isNaN">isNaN(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检查 value 是否是 NaN。</p>
<p>注意: 这个方法基于 <a href="https://mdn.io/Number/isNaN">Number.isNaN</a>，和全局的
<a href="https://mdn.io/isNaN">isNaN</a> 不同之处在于，全局的 <a href="https://mdn.io/isNaN">isNaN</a> 对于 undefined 和其他非数字的值返回 true。</p>
</dd>
<dt><a href="#random">random([lower], [upper], [floating])</a> ⇒ <code>number</code></dt>
<dd><p>产生一个包括 lower 与 upper 之间的随机数。 如果只提供一个参数返回一个0到提供数之间的数。
如果 floating 设为 true，或者 lower 或 upper 是浮点数，结果返回浮点数。</p>
<p><strong>注意</strong>: JavaScript 遵循 IEEE-754 标准处理无法预料的浮点数结果。</p>
</dd>
<dt><a href="#toFixed">toFixed(value, size, [processor])</a> ⇒ <code>Number</code></dt>
<dd><p>保留指定位数的小数</p>
</dd>
</dl>

<a name="isNumber"></a>

## isNumber(value) ⇒ <code>boolean</code>
检查 value 是否是原始 Number 数值型 或者 数值常量对象

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 要检查的值。 |

**Example**  
```js
isNumber(3);
```
<a name="isNumeric"></a>

## isNumeric(value) ⇒ <code>boolean</code>
检查 value 是否为全数字内容

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 要检查的值。 |

**Example**  
```js
isNumeric(Number.MIN_VALUE);
```
<a name="isNaN"></a>

## isNaN(value) ⇒ <code>boolean</code>
检查 value 是否是 NaN。

**Kind**: global function  
**Returns**: <code>boolean</code> - 如果 value 是一个 NaN，那么返回 true，否则返回 false。  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 要检查的值。 |

**Example**  
```js
isNaN(NaN);
```
<a name="random"></a>

## random([lower], [upper], [floating]) ⇒ <code>number</code>
产生一个包括 lower 与 upper 之间的随机数。 如果只提供一个参数返回一个0到提供数之间的数。

**Kind**: global function  
**Returns**: <code>number</code> - 返回随机数。  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [lower] | <code>number</code> | <code>0</code> | 下限。 |
| [upper] | <code>number</code> | <code>1</code> | 上限。 |
| [floating] | <code>boolean</code> |  | 指定是否返回浮点数。 |

**Example**  
```js
random(0, 5);
```
<a name="toFixed"></a>

## toFixed(value, size, [processor]) ⇒ <code>Number</code>
保留指定位数的小数

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>Number</code> |  | 原数值 |
| size | <code>Number</code> |  | 需要保留的小数位数 |
| [processor] | <code>function</code> | <code>Math.round</code> | 截断小数的处理函数，默认使用四舍五入函数 |
