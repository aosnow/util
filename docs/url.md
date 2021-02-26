## Functions

<dl>
<dt><a href="#isDataURL">isDataURL(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检测 value 是否为 Base64 格式的 DataURL （即 base64 图片）</p>
</dd>
<dt><a href="#isAbsoluteURL">isAbsoluteURL(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检测 value 是否是 绝对地址（如以 http 开头的网址）</p>
</dd>
<dt><a href="#mergeURL">mergeURL(rootURL, otherURL)</a> ⇒ <code>String</code></dt>
<dd><p>合并多个URL部分为完整的 URL 地址</p>
</dd>
</dl>

<a name="isDataURL"></a>

## isDataURL(value) ⇒ <code>boolean</code>
检测 value 是否为 Base64 格式的 DataURL （即 base64 图片）

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 要检查的值。 |

<a name="isAbsoluteURL"></a>

## isAbsoluteURL(value) ⇒ <code>boolean</code>
检测 value 是否是 绝对地址（如以 http 开头的网址）

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 要检查的值。 |

**Example**  
```js
isAbsoluteURL('http://www.xxx.com');
// => true

isAbsoluteURL('ftp://200.0.0.1/xxx');
// => true

isAbsoluteURL('/upload/xxx.jpg');
// => false
```
<a name="mergeURL"></a>

## mergeURL(rootURL, otherURL) ⇒ <code>String</code>
合并多个URL部分为完整的 URL 地址

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| rootURL | <code>String</code> | 如 'http://img.xxx.com' |
| otherURL | <code>String</code> | 如 '2021-01-30','upload/xxx.jpg' |

**Example**  
```js
mergeURL('http://img.xxx.com', '2021-01-30', 'upload/xxx.jpg');
// => 'http://img.xxx.com/2021-01-30/upload/xxx.jpg'

mergeURL('2021-01-30', 'upload/xxx.jpg');
// => '2021-01-30/upload/xxx.jpg'
```
