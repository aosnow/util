## Functions

<dl>
<dt><a href="#getTag">getTag(value)</a> ⇒ <code>string</code></dt>
<dd><p>取得指定数据的原始类型（如 [object Object]）</p>
</dd>
<dt><a href="#isObject">isObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检测 value 是否为 <code>Object</code>
<a href="http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types">类型</a>
(如 <code>arrays</code>, <code>dates</code>, <code>objects</code>, <code>regexes</code>, <code>new Number(0)</code>, 和 <code>new String(&#39;&#39;)</code>，但不包含 <code>null</code>、<code>undefined</code>、<code>function</code>)</p>
</dd>
<dt><a href="#isPlainObject">isPlainObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检查 value 是否是普通对象。 也就是说该对象由 Object 构造函数创建，或者 prototype 为 null 。</p>
</dd>
<dt><a href="#get">get(object, path, [defaultValue])</a> ⇒ <code>*</code></dt>
<dd><p>根据 <code>object</code> 对象的 <code>path</code> 路径获取值。 如果解析 <code>value</code> 是 <code>undefined</code> 会以 <code>defaultValue</code> 取代。</p>
<p><strong>说明：</strong> 该方法主要目的在于，直接通过 <code>path</code> 访问 <code>object</code> 属性值，很可能 <code>path</code> 的中间层属性就已经是 <code>undefined</code>，无法达到目标层级得到对应属性值，
而报错误 <code>TypeError: Cannot read property &#39;xxx&#39; of undefined</code>，这在 <code>vue</code> 项目的 <code>vuex</code> 属性访问时极为常见。</p>
</dd>
<dt><a href="#set">set(object, path, value, [customizer])</a> ⇒ <code>Object</code></dt>
<dd><p>设置 <code>object</code> 对象中对应 <code>path</code> 属性路径上的值，如果 <code>path</code> 任何一级不存在，则创建。
缺少的索引属性会创建为数组，而缺少的属性会创建为对象。</p>
<p><strong>注意:</strong> 这个方法会改变 <code>object</code>。</p>
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
检测 value 是否为 `Object`
[类型](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
(如 `arrays`, `dates`, `objects`, `regexes`, `new Number(0)`, 和 `new String('')`，但不包含 `null`、`undefined`、`function`)

**Kind**: global function  
**Returns**: <code>boolean</code> - 如果 value 是一个 Object 类型，那么返回 true，否则返回 false。  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 待检查的值 |

**Example**  
```js
isObject({});
// => true

isObject([1, 2, 3]);
// => true

isObject(new Date());
// => true

isObject(noop);
// => false

isObject(null);
// => false
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
function Foo() {
 this.a = 1;
}

isPlainObject(new Foo);
// => false

isPlainObject([1, 2, 3]);
// => false

isPlainObject({ 'x': 0, 'y': 0 });
// => true

isPlainObject(Object.create(null));
// => true
```
<a name="get"></a>

## get(object, path, [defaultValue]) ⇒ <code>\*</code>
根据 `object` 对象的 `path` 路径获取值。 如果解析 `value` 是 `undefined` 会以 `defaultValue` 取代。

**说明：** 该方法主要目的在于，直接通过 `path` 访问 `object` 属性值，很可能 `path` 的中间层属性就已经是 `undefined`，无法达到目标层级得到对应属性值，
而报错误 `TypeError: Cannot read property 'xxx' of undefined`，这在 `vue` 项目的 `vuex` 属性访问时极为常见。

**Kind**: global function  
**Returns**: <code>\*</code> - 返回解析 `path` 的值。  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | 要检索的对象。 |
| path | <code>Array.&lt;String&gt;</code> \| <code>String</code> | 要获取属性的路径。 |
| [defaultValue] | <code>\*</code> | 如果解析 `path` 的值是 `undefined` ，则返回该指定的默认值。 |

**Example**  
```js
var object = { 'a': [{ 'b': { 'c': 3 } }] };

get(object, 'a[0].b.c');
// => 3

get(object, ['a', '0', 'b', 'c']);
// => 3

get(object, 'a.b.c', 'default');
// => 'default'
```
<a name="set"></a>

## set(object, path, value, [customizer]) ⇒ <code>Object</code>
设置 `object` 对象中对应 `path` 属性路径上的值，如果 `path` 任何一级不存在，则创建。
缺少的索引属性会创建为数组，而缺少的属性会创建为对象。

**注意:** 这个方法会改变 `object`。

**Kind**: global function  
**Returns**: <code>Object</code> - 返回被修改后的 `object`。  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | 要修改的对象。 |
| path | <code>Array</code> \| <code>string</code> | 要设置的对象路径。 |
| value | <code>\*</code> | 要设置的值。 |
| [customizer] | <code>function</code> | 用来定制分配的值的自定义方法 |

**Example**  
```js
var object = { 'a': [{ 'b': { 'c': 3 } }] };

set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c);
// => 4

set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z);
// => 5
```
