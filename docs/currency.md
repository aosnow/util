<a name="currency"></a>

## currency(value, [removeTrailingZeros], [symbol]) ⇒ <code>string</code>
格式化数字为货币格式

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>number</code> \| <code>string</code> |  | 原始数据 |
| [removeTrailingZeros] | <code>boolean</code> | <code>false</code> | 是否删除末尾补位的0，如“￥5.00”会得到“￥5” |
| [symbol] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | 是否输出带符号的货币数值 |

**Example**  
```js
currency(15.6);
// => 15.60

currency(15.6, true);
// => 15.6

currency(15.6, false, '￥');
// => ￥15.60
```
