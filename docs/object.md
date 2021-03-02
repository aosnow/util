## Functions

<dl>
<dt><a href="#getTag">getTag(value)</a> ⇒ <code>string</code></dt>
<dd><p>取得指定数据的原始类型（如 [object Object]）</p>
</dd>
<dt><a href="#isObject">isObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检测 value 是否为 <code>Object</code>
<a href="http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types">类型</a>
(如 arrays, functions, objects, regexes, <code>new Number(0)</code>, 和 <code>new String(&#39;&#39;)</code>)</p>
</dd>
<dt><a href="#isObjectLike">isObjectLike(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检查 value 是否为类似 Object 类型（如 {}、arrays等，但不包含 null、undefined、function）</p>
</dd>
<dt><a href="#isPlainObject">isPlainObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检查 value 是否是普通对象。 也就是说该对象由 Object 构造函数创建，或者 prototype 为 null 。</p>
</dd>
</dl>

<a name="getTag"></a>

## getTag(value) ⇒ <code>string</code>
取得指定数据的原始类型（如 [object Object]）

**Kind**: global function  
**Returns**: <code>string</code> - 类型标识，如 `[object Object]`  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 待检查的值 |

<a name="isObject"></a>

## isObject(value) ⇒ <code>boolean</code>
检测 value 是否为 `Object`[类型](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)(如 arrays, functions, objects, regexes, `new Number(0)`, 和 `new String('')`)

**Kind**: global function  
**Returns**: <code>boolean</code> - 如果 value 是一个 Object 类型，那么返回 true，否则返回 false。  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 待检查的值 |

**Example**  
```js
isObject({});// => trueisObject([1, 2, 3]);// => trueisObject(noop);// => trueisObject(null);// => false
```
<a name="isObjectLike"></a>

## isObjectLike(value) ⇒ <code>boolean</code>
检查 value 是否为类似 Object 类型（如 {}、arrays等，但不包含 null、undefined、function）

**Kind**: global function  
**Returns**: <code>boolean</code> - 如果 value 是一个类似 Object 对象类型，那么返回 true，否则返回 false。  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 待检查的值 |

**Example**  
```js
isObjectLike({});// => trueisObjectLike([1, 2, 3]);// => trueisObjectLike(noop);// => falseisObjectLike(null);// => false
```
<a name="isPlainObject"></a>

## isPlainObject(value) ⇒ <code>boolean</code>
检查 value 是否是普通对象。 也就是说该对象由 Object 构造函数创建，或者 prototype 为 null 。

**Kind**: global function  
**Returns**: <code>boolean</code> - 如果 value 是一个普通对象，那么返回 true，否则返回 false。  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 待检查的值 |

**Example**  
```js
function Foo() { this.a = 1;}isPlainObject(new Foo);// => falseisPlainObject([1, 2, 3]);// => falseisPlainObject({ 'x': 0, 'y': 0 });// => trueisPlainObject(Object.create(null));// => true
```
