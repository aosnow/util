## Functions

<dl>
<dt><a href="#repeat">repeat(input, [size])</a> ⇒ <code>String</code></dt>
<dd><p>重复字符串指定的次数</p>
</dd>
<dt><a href="#trim">trim(input)</a> ⇒ <code>String</code></dt>
<dd><p>去除字符串首尾的空格</p>
</dd>
<dt><a href="#isString">isString(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检查 value 是否是原始字符串String或者对象。</p>
</dd>
<dt><a href="#camelCase">camelCase([value])</a> ⇒ <code>string</code></dt>
<dd><p>转换字符串 value 为<a href="https://en.wikipedia.org/wiki/CamelCase">驼峰</a>写法</p>
</dd>
<dt><a href="#kebabCase">kebabCase([value])</a> ⇒ <code>string</code></dt>
<dd><p>转换 value 为 <a href="https://en.wikipedia.org/wiki/Letter_case#Special_case_styles">中横线</a>写法</p>
</dd>
<dt><a href="#snakeCase">snakeCase([value])</a> ⇒ <code>string</code></dt>
<dd><p>转换 value 为 <a href="https://en.wikipedia.org/wiki/Snake_case">下划线</a>写法</p>
</dd>
</dl>

<a name="repeat"></a>

## repeat(input, [size]) ⇒ <code>String</code>
重复字符串指定的次数

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | 输入源 |
| [size] | <code>Number</code> | 需要重复的次数 |

**Example**  
```js
repeat('a');
// => 'aaa'

repeat('good!');
// => 'good!good!good!'
```
<a name="trim"></a>

## trim(input) ⇒ <code>String</code>
去除字符串首尾的空格

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>String</code> | 输入源 |

**Example**  
```js
trim(' a bc   ');
// => 'a bc'
```
<a name="isString"></a>

## isString(value) ⇒ <code>boolean</code>
检查 value 是否是原始字符串String或者对象。

**Kind**: global function  
**Returns**: <code>boolean</code> - 如果 value 为一个字符串，那么返回 true，否则返回 false。  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 待检查的值 |

**Example**  
```js
isString('abc');
// => true

isString(1);
// => false
```
<a name="camelCase"></a>

## camelCase([value]) ⇒ <code>string</code>
转换字符串 value 为[驼峰](https://en.wikipedia.org/wiki/CamelCase)写法

**Kind**: global function  
**Returns**: <code>string</code> - 返回驼峰写法的字符串  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [value] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | 要转换的字符串 |

**Example**  
```js
camelCase('Foo Bar');
// => 'fooBar'

camelCase('--foo-bar--');
// => 'fooBar'

camelCase('__FOO_BAR__');
// => 'fooBar'

camelCase('fooBar');
// => 'fooBar'
```
<a name="kebabCase"></a>

## kebabCase([value]) ⇒ <code>string</code>
转换 value 为 [中横线](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles)写法

**Kind**: global function  
**Returns**: <code>string</code> - 返回转换后的字符串  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [value] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | 要转换的字符串 |

**Example**  
```js
kebabCase('Foo Bar');
// => 'foo-bar'

kebabCase('fooBar');
// => 'foo-bar'

kebabCase('__FOO_BAR__');
// => 'foo-bar'
```
<a name="snakeCase"></a>

## snakeCase([value]) ⇒ <code>string</code>
转换 value 为 [下划线](https://en.wikipedia.org/wiki/Snake_case)写法

**Kind**: global function  
**Returns**: <code>string</code> - 返回转换后的字符串  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [value] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | 要转换的字符串 |

**Example**  
```js
snakeCase('Foo Bar');
// => 'foo_bar'

snakeCase('fooBar');
// => 'foo_bar'

snakeCase('--FOO-BAR--');
// => 'foo_bar'
```
