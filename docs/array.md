## Constants

<dl>
<dt><a href="#typedArrayTags">typedArrayTags</a></dt>
<dd><p>Used to identify <code>toStringTag</code> values of typed arrays.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#isArray">isArray(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检查 value 是否是 Array 类对象。</p>
</dd>
<dt><a href="#isArrayLike">isArrayLike(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检查 value 是否是类数组。 如果一个值被认为是类数组，那么它不是一个函数，并且 <code>value.length</code> 是个整数，大于等于 <code>0</code>，小于或等于 <code>Number.MAX_SAFE_INTEGER</code>。</p>
</dd>
<dt><a href="#isTypedArray">isTypedArray(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检查 value 是否是TypedArray。</p>
</dd>
</dl>

<a name="typedArrayTags"></a>

## typedArrayTags
Used to identify `toStringTag` values of typed arrays.

**Kind**: global constant  
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
isArray([1, 2, 3]);// => trueisArray(document.body.children);// => falseisArray('abc');// => falseisArray(noop);// => false
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
isArrayLike([1, 2, 3]);// => trueisArrayLike(document.body.children);// => trueisArrayLike('abc');// => trueisArrayLike(noop);// => false
```
<a name="isTypedArray"></a>

## isTypedArray(value) ⇒ <code>boolean</code>
检查 value 是否是TypedArray。

**Kind**: global function  
**Returns**: <code>boolean</code> - 如果 value 为一个typed array，那么返回 true，否则返回 false。  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 要检查的值。 |

**Example**  
```js
isTypedArray(new Uint8Array);// => trueisTypedArray([]);// => false
```
