<a name="clone"></a>

## clone(value) ⇒ <code>Object</code>
深度克隆指定对象，返回克隆后的副本**注意**：该方法仅支持 <code>Array,Date,RegExp,Set,Map,URL,URLSearchParams,ArrayBuffer,DataView,Int8Array,Int16Array,Int32Array,Uint8Array,Uint8ClampedArray,Uint16Array,Uint32Array,Float32Array,Float64Array,Object</code> 对象的克隆。

**Kind**: global function  
**Returns**: <code>Object</code> - 与源对象 value 无关的副本对象  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | 待克隆的对象 |

**Example**  
```js
var object = { 'a': 1 };var obj2 = clone(object);obj2.a = 2;console.log(object.a, obj2.a);// => 1  2
```
