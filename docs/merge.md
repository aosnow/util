<a name="merge"></a>

## merge(target, [...source], customizer) ⇒ <code>Object</code>
递归合并 source 来源对象自身和继承的可枚举属性到 object 目标对象<ul><li>数组和普通对象会递归合并，其他对象和值会被直接分配覆盖</li><li>源对象从从左到右分配</li><li>后续的来源对象属性会覆盖之前分配的属性</li><li>该方法会改变目标对象 target</li><li>source 对象字段值类型若与 target 对象字段值类型 不一致，由 source 覆盖前者，target 源数据将丢失</li></ul>

**Kind**: global function  
**Returns**: <code>Object</code> - 返回合并后的 `object`  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Object</code> | 目标对象 |
| [...source] | <code>Object</code> | 来源对象 |
| customizer | <code>function</code> | 自定义赋值逻辑的方法，每次比较将传入参数 (objValue, srcValue, key, object, source) |

**Example**  
```js
var object = {  'a': [{ 'b': 2 }, { 'd': 4 }]};var other = {  'a': [{ 'c': 3 }, { 'e': 5 }]};merge(object, other);// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
```
