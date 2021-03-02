<a name="merge"></a>

## merge(target, [...source], customizer) ⇒ <code>Object</code>
递归合并 source 来源对象自身和继承的可枚举属性到 object 目标对象

**Kind**: global function  
**Returns**: <code>Object</code> - 返回合并后的 `object`  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Object</code> | 目标对象 |
| [...source] | <code>Object</code> | 来源对象 |
| customizer | <code>function</code> | 自定义赋值逻辑的方法，每次比较将传入参数 (objValue, srcValue, key, object, source) |

**Example**  
```js
var object = {
```