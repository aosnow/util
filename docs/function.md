## Functions

<dl>
<dt><a href="#isFunction">isFunction(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>检测 value 是否为 <code>Function</code> 对象.</p>
</dd>
<dt><a href="#noop">noop()</a></dt>
<dd><p>不执行任何操作的空函数，其返回值为 <code>undefined</code>.</p>
</dd>
<dt><a href="#debounce">debounce(func, [wait], [leading])</a> ⇒ <code>function</code></dt>
<dd><p>对指定函数进行节流调用，该函数会从上一次被调用后，计时 wait 毫秒后重新开放调用。</p>
</dd>
</dl>

<a name="isFunction"></a>

## isFunction(value) ⇒ <code>boolean</code>
检测 value 是否为 `Function` 对象.

**Kind**: global function  
**Returns**: <code>boolean</code> - 若 `value` 为函数类型则返回 `true`，否则返回 `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 待检查的值 |

**Example**  
```js
isFunction(noop);// => trueisFunction(/abc/);// => false
```
<a name="noop"></a>

## noop()
不执行任何操作的空函数，其返回值为 `undefined`.

**Kind**: global function  
<a name="debounce"></a>

## debounce(func, [wait], [leading]) ⇒ <code>function</code>
对指定函数进行节流调用，该函数会从上一次被调用后，计时 wait 毫秒后重新开放调用。

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| func | <code>function</code> |  | 需要节流的函数（若需要对 func 进行传参，请进行二次包装成无需传参的函数壳） |
| [wait] | <code>Number</code> | <code>6000</code> | 需要延迟的毫秒数（默认：600ms） |
| [leading] | <code>Boolean</code> | <code>true</code> | 指定 func 是否立即调用，还是延迟 wait 毫秒后调用（默认：true，即立即调用） |

