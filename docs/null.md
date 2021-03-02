## Functions

<dl>
<dt><a href="#isNull">isNull(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检查 value 是否是 null</p>
</dd>
<dt><a href="#isNil">isNil(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检查 value 是否是 null 或者 undefined</p>
</dd>
</dl>

<a name="isNull"></a>

## isNull(value) ⇒ <code>boolean</code>
检查 value 是否是 null

**Kind**: global function  
**Returns**: <code>boolean</code> - 如果 value 为 null，那么返回 true，否则返回 false。  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 待检查的值 |

**Example**  
```js
isNull(null);// => trueisNull(void 0);// => false
```
<a name="isNil"></a>

## isNil(value) ⇒ <code>boolean</code>
检查 value 是否是 null 或者 undefined

**Kind**: global function  
**Returns**: <code>boolean</code> - 如果 value 为 null 或 undefined，那么返回 true，否则返回 false。  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 待检查的值 |

**Example**  
```js
isNil(null);// => trueisNil(void 0);// => trueisNil(NaN);// => false
```
