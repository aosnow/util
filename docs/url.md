## Functions

<dl>
<dt><a href="#isURL">isURL(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检测 <code>value</code> 是否为 URL 对象类型</p>
</dd>
<dt><a href="#isURLSearchParams">isURLSearchParams(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检测 <code>value</code> 是否为 URLSearchParams 对象类型</p>
</dd>
<dt><a href="#isDataURL">isDataURL(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检测 value 是否为 Base64 格式的 DataURL （即 base64 图片）</p>
</dd>
<dt><a href="#isAbsoluteURL">isAbsoluteURL(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检测 value 是否是 绝对地址（如以 http 开头的网址）</p>
</dd>
<dt><a href="#isIpURL">isIpURL(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检测 value 是否是 ip 地址开始的 URL（如以 ip 开头的网址）</p>
</dd>
<dt><a href="#isRelativeURL">isRelativeURL(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检测 value 是否是 相对地址（如以 &#39;./&#39;,&#39;../&#39;,&#39;/&#39;,&#39;目录名&#39; 开头的网址）</p>
</dd>
<dt><a href="#mergeURL">mergeURL(rootURL, otherURL)</a> ⇒ <code>String</code></dt>
<dd><p>合并多个URL部分为完整的 URL 地址</p>
</dd>
<dt><a href="#resetURL">resetURL(url, [query], [useHistoryMode])</a> ⇒ <code>URL</code> | <code>null</code></dt>
<dd><p>解析并设置指定的 query 参数到指定的 url</p>
</dd>
</dl>

<a name="isURL"></a>

## isURL(value) ⇒ <code>boolean</code>
检测 `value` 是否为 URL 对象类型

**Kind**: global function  
**Returns**: <code>boolean</code> - 若 `value` 为 URL 对象类型返回 `true`，否则返回 `false`  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 待检测的值 |

**Example**  
```js
const url = new URL('http://www.example.com/dogs');
isURL(url);
// => true
```
<a name="isURLSearchParams"></a>

## isURLSearchParams(value) ⇒ <code>boolean</code>
检测 `value` 是否为 URLSearchParams 对象类型

**Kind**: global function  
**Returns**: <code>boolean</code> - 若 `value` 为 URLSearchParams 对象类型返回 `true`，否则返回 `false`  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 待检测的值 |

**Example**  
```js
const url = new URL('http://www.example.com/dogs?id=123');
isURLSearchParams(url.searchParams);
// => true

console.log(url.searchParams.get("id"));
// => '123'
```
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

isAbsoluteURL('//xxx.com/path');
// => true

isAbsoluteURL('/upload/xxx.jpg');
// => false
```
<a name="isIpURL"></a>

## isIpURL(value) ⇒ <code>boolean</code>
检测 value 是否是 ip 地址开始的 URL（如以 ip 开头的网址）

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 要检查的值。 |

**Example**  
```js
isIpURL('http://127.0.0.1/path');
// => true

isIpURL('ftp://200.0.0.1/path');
// => true

isIpURL('//172.16.8.6/path');
// => true

isIpURL('http://www.xxx.com');
// => false
```
<a name="isRelativeURL"></a>

## isRelativeURL(value) ⇒ <code>boolean</code>
检测 value 是否是 相对地址（如以 './','../','/','目录名' 开头的网址）

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 要检查的值。 |

**Example**  
```js
isRelativeURL('a/b/c/i.html');
// => true

isRelativeURL('a/b/c/q?k=123');
// => true

isRelativeURL('../a/b/c');
// => true

isRelativeURL('//a.com/b/c');
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
<a name="resetURL"></a>

## resetURL(url, [query], [useHistoryMode]) ⇒ <code>URL</code> \| <code>null</code>
解析并设置指定的 query 参数到指定的 url

**Kind**: global function  
**Returns**: <code>URL</code> \| <code>null</code> - 若 url 为非 URL 对象，也不为绝对地址，则返回 null  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>string</code> \| <code>URL</code> |  | 绝对地址 |
| [query] | <code>object</code> | <code></code> | 需要设置的 query 数据集合 |
| [useHistoryMode] | <code>boolean</code> \| <code>null</code> | <code></code> | 是否使用 history 路由模式（若省略，则自动从 url 检测是否包含 # 来判断） |

**Example**  
```js
resetURL('http://www.baidu.com/?k=xxx', {a:1,b:2});
// => URL { href: "http://www.baidu.com/?a=1&b=2&k=xxx", search: "?a=1&b=2&k=xxx", ... }

resetURL('http://www.baidu.com/#/?k=xxx', {a:1,b:2});
// => URL { hash: "#/?a=1&b=2&k=xxx", href: "http://www.baidu.com/#/?a=1&b=2&k=xxx", search: "", ... }
```
