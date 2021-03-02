## Functions

<dl>
<dt><a href="#isBoolean">isBoolean(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检查 value 是否是原始 Boolean 型</p>
</dd>
<dt><a href="#isFalse">isFalse(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检查 value 是否是 <code>Javascript</code> 认为的 false 值（包括 null,undefinded,false,NaN,空字符串，空数组）</p>
</dd>
</dl>

<a name="isBoolean"></a>

## isBoolean(value) ⇒ <code>boolean</code>
检查 value 是否是原始 Boolean 型

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 要检查的值。 |

**Example**  
```js
isBoolean(true);// => trueisBoolean(false);// => trueisBoolean(0);// => false
```
<a name="isFalse"></a>

## isFalse(value) ⇒ <code>boolean</code>
检查 value 是否是 `Javascript` 认为的 false 值（包括 null,undefinded,false,NaN,空字符串，空数组）

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 要检查的值。 |

**Example**  
```js
isFalse(true);// => falseisFalse(false);// => trueisFalse('');// => trueisFalse([]);// => trueisFalse(0);// => false
```
