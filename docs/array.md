## Functions

<dl>
<dt><a href="#isArray">isArray(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检查 value 是否是 Array 类对象。</p>
</dd>
<dt><a href="#isArrayLike">isArrayLike(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检查 value 是否是类数组。 如果一个值被认为是类数组，那么它不是一个函数，并且 <code>value.length</code> 是个整数，大于等于 <code>0</code>，小于或等于 <code>Number.MAX_SAFE_INTEGER</code>。</p>
</dd>
<dt><a href="#isEmptyArray">isEmptyArray(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检测 <code>value</code> 是否为不包含任何元素的空 <code>Array</code> 对象。</p>
</dd>
</dl>

<a name="isArray"></a>

## isArray(value) ⇒ <code>boolean</code>
检查 value 是否是 Array 类对象。

**Kind**: global function  
**Returns**: <code>boolean</code> - 如果value是一个数组返回 true，否则返回 false。  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 要检查的值。 |

**Example**  
```js
isArray([1, 2, 3]);
// => true

isArray(document.body.children);
// => false

isArray('abc');
// => false

isArray(noop);
// => false
```
<a name="isArrayLike"></a>

## isArrayLike(value) ⇒ <code>boolean</code>
检查 value 是否是类数组。 如果一个值被认为是类数组，那么它不是一个函数，并且 `value.length` 是个整数，大于等于 `0`，小于或等于 `Number.MAX_SAFE_INTEGER`。

**Kind**: global function  
**Returns**: <code>boolean</code> - 如果value是一个类数组，那么返回 true，否则返回 false。  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 要检查的值。 |

**Example**  
```js
isArrayLike([1, 2, 3]);
// => true

isArrayLike(document.body.children);
// => true

isArrayLike('abc');
// => true

isArrayLike(noop);
// => false
```
<a name="isEmptyArray"></a>

## isEmptyArray(value) ⇒ <code>boolean</code>
检测 `value` 是否为不包含任何元素的空 `Array` 对象。

**Kind**: global function  
**Returns**: <code>boolean</code> - 如果value是一个空数组返回 true（非数组同样将返回 true），否则返回 false。  

| Param | Description |
| --- | --- |
| value | 要检查的值。 |

**Example**  
```js
isEmptyArray([1, 2, 3]);
// => false

isEmptyArray([]);
// => true
```
