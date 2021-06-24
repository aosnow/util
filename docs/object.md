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
<dt><a href="#transformCase">transformCase(object, [mode])</a></dt>
<dd><p>将对象所有的 key 转换为指定的命名方式</p>
<ul>
<li><code>&#39;snake&#39;</code> - 将所有参数转换为 <code>&#39;下划线&#39;</code> 命名方式，如 <code>foo_bar</code></li>
<li><code>&#39;camel&#39;</code> - 将所有参数转换为 <code>&#39;驼峰法&#39;</code> 命名方式，如 <code>fooBar</code></li>
<li><code>&#39;kebab&#39;</code> - 将所有参数转换为 <code>&#39;中横线&#39;</code> 命名方式，如 <code>foo-bar</code></li>
</ul>
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
<a name="transformCase"></a>

## transformCase(object, [mode])
将对象所有的 key 转换为指定的命名方式
- `'snake'` - 将所有参数转换为 `'下划线'` 命名方式，如 `foo_bar`
- `'camel'` - 将所有参数转换为 `'驼峰法'` 命名方式，如 `fooBar`
- `'kebab'` - 将所有参数转换为 `'中横线'` 命名方式，如 `foo-bar`

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| object | <code>object</code> |  | 参数数据集合 |
| [mode] | <code>string</code> | <code>&quot;&#x27;snake&#x27;&quot;</code> | 需要转换的目标模式 |

**Example**  
```js
const o = {a_b:'', aC:''};

transformCase(o);
// => {a_b:'', a_c:''}

transformCase(o, 'camel');
// => {aB:'', aC:''}

transformCase(o, 'kebab');
// => {'a-b':'', 'a-c':''}
```
