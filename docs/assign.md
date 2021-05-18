## Functions

<dl>
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

<a name="get"></a>

## get(object, path, [defaultValue]) ⇒ <code>\*</code>
根据 `object` 对象的 `path` 路径获取值。 如果解析 `value` 是 `undefined` 会以 `defaultValue` 取代。

**说明：** 该方法主要目的在于，直接通过 `path` 访问 `object` 属性值，很可能 `path` 的中间层属性就已经是 `undefined`，无法达到目标层级得到对应属性值，
而报错误 `TypeError: Cannot read property 'xxx' of undefined`，这在 `vue` 项目的 `vuex` 属性访问时极为常见。

**Kind**: global function  
**Returns**: <code>\*</code> - 返回解析 `path` 的值。  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| object | <code>Object</code> |  | 要检索的对象。 |
| path | <code>Array.&lt;String&gt;</code> \| <code>String</code> |  | 要获取属性的路径。 |
| [defaultValue] | <code>\*</code> | <code></code> | 如果解析 `path` 的值是 `undefined` ，则返回该指定的默认值。 |

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

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| object | <code>Object</code> |  | 要修改的对象。 |
| path | <code>Array</code> \| <code>string</code> |  | 要设置的对象路径。 |
| value | <code>\*</code> |  | 要设置的值。 |
| [customizer] | <code>function</code> | <code></code> | 用来定制分配的值的自定义方法，如 `customizer(nested, key, newValue)`，当 `newValue !== nested[key]` 时代表需要设置新的属性值， 此时可以使用 Vue.set 来设置新的值以支持动态 响应特性（请注意，这与 lodash 的 set 使用策略完全不同） |

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
