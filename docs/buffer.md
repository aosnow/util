## Functions

<dl>
<dt><a href="#isBuffer">isBuffer(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检测 <code>value</code> 是否为 Buffer 类型</p>
</dd>
<dt><a href="#isArrayBuffer">isArrayBuffer(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检测 <code>value</code> 是否为 ArrayBuffer 类型</p>
<p><strong>说明：</strong> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer">ArrayBuffer</a> 对象用来表示通用的、固定长度的原始二进制数据缓冲区</p>
</dd>
<dt><a href="#isArrayBufferView">isArrayBufferView(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检测 <code>value</code> 是否为 ArrayBuffer 视图（view）</p>
</dd>
<dt><a href="#isStream">isStream(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检测 <code>value</code> 是否为 Stream 类型</p>
</dd>
</dl>

<a name="isBuffer"></a>

## isBuffer(value) ⇒ <code>boolean</code>
检测 `value` 是否为 Buffer 类型

**Kind**: global function  
**Returns**: <code>boolean</code> - 若 `value` 为 Buffer 类型返回 `true`，否则返回 `false`  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | 待检测的值 |

<a name="isArrayBuffer"></a>

## isArrayBuffer(value) ⇒ <code>boolean</code>
检测 `value` 是否为 ArrayBuffer 类型

**说明：** [ArrayBuffer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) 对象用来表示通用的、固定长度的原始二进制数据缓冲区

**Kind**: global function  
**Returns**: <code>boolean</code> - 若 `value` 为 ArrayBuffer 类型返回 `true`，否则返回 `false`  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 待检测的值 |

**Example**  
```js
const buffer = new ArrayBuffer(8);
isArrayBuffer(buffer);
// => true
```
<a name="isArrayBufferView"></a>

## isArrayBufferView(value) ⇒ <code>boolean</code>
检测 `value` 是否为 ArrayBuffer 视图（view）

**Kind**: global function  
**Returns**: <code>boolean</code> - 若 `value` 为 ArrayBuffer 视图类型返回 `true`，否则返回 `false`  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 待检测的值 |

**Example**  
```js
isArrayBufferView();                    // false
isArrayBufferView([]);                  // false
isArrayBufferView({});                  // false
isArrayBufferView(null);                // false
isArrayBufferView(undefined);           // false
isArrayBufferView(new ArrayBuffer(10)); // false

isArrayBufferView(new Uint8Array());    // true
isArrayBufferView(new Float32Array());  // true
isArrayBufferView(new Int8Array(10).subarray(0, 3)); // true

var buffer = new ArrayBuffer(2);
var dv = new DataView(buffer);
isArrayBufferView(dv); // true
```
<a name="isStream"></a>

## isStream(value) ⇒ <code>boolean</code>
检测 `value` 是否为 Stream 类型

**Kind**: global function  
**Returns**: <code>boolean</code> - 若 `value` 为 Stream 类型返回 `true`，否则返回 `false`  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 待检测的值 |

