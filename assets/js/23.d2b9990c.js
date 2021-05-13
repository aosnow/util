(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{377:function(t,a,s){"use strict";s.r(a);var n=s(41),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),s("dl",[s("dt",[s("a",{attrs:{href:"#isNumber"}},[t._v("isNumber(value)")]),t._v(" ⇒ "),s("code",[t._v("boolean")])]),t._v(" "),s("dd",[s("p",[t._v("检查 value 是否是原始 Number 数值型 或者 数值常量对象")])]),t._v(" "),s("dt",[s("a",{attrs:{href:"#isNumeric"}},[t._v("isNumeric(value)")]),t._v(" ⇒ "),s("code",[t._v("boolean")])]),t._v(" "),s("dd",[s("p",[t._v("检查 value 是否为全数字内容")]),t._v(" "),s("p",[t._v("注：该方法包含所有 isNumber(value) 为 true 的情况，以及字符串类型的数字。即该方法比 isNumber 的条件更宽泛，可用于检测任意数字内容出现的场景。")]),t._v(" "),s("p",[t._v("注：NaN 也属于一个合法的数值型。")])]),t._v(" "),s("dt",[s("a",{attrs:{href:"#isNaN"}},[t._v("isNaN(value)")]),t._v(" ⇒ "),s("code",[t._v("boolean")])]),t._v(" "),s("dd",[s("p",[t._v("检查 value 是否是 NaN。")]),t._v(" "),s("p",[t._v("注意: 这个方法基于 "),s("a",{attrs:{href:"https://mdn.io/Number/isNaN"}},[t._v("Number.isNaN")]),t._v("，和全局的\n"),s("a",{attrs:{href:"https://mdn.io/isNaN"}},[t._v("isNaN")]),t._v(" 不同之处在于，全局的 "),s("a",{attrs:{href:"https://mdn.io/isNaN"}},[t._v("isNaN")]),t._v(" 对于 undefined 和其他非数字的值返回 true。")])]),t._v(" "),s("dt",[s("a",{attrs:{href:"#random"}},[t._v("random([lower], [upper], [floating])")]),t._v(" ⇒ "),s("code",[t._v("number")])]),t._v(" "),s("dd",[s("p",[t._v("产生一个包括 lower 与 upper 之间的随机数。 如果只提供一个参数返回一个0到提供数之间的数。\n如果 floating 设为 true，或者 lower 或 upper 是浮点数，结果返回浮点数。")]),t._v(" "),s("p",[s("strong",[t._v("注意")]),t._v(": JavaScript 遵循 IEEE-754 标准处理无法预料的浮点数结果。")])]),t._v(" "),s("dt",[s("a",{attrs:{href:"#toFixed"}},[t._v("toFixed(value, size, [processor])")]),t._v(" ⇒ "),s("code",[t._v("Number")])]),t._v(" "),s("dd",[s("p",[t._v("保留指定位数的小数")])])]),t._v(" "),s("p",[s("a",{attrs:{name:"isNumber"}})]),t._v(" "),s("h2",{attrs:{id:"isnumber-value-⇒-boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isnumber-value-⇒-boolean"}},[t._v("#")]),t._v(" isNumber(value) ⇒ "),s("code",[t._v("boolean")])]),t._v(" "),s("p",[t._v("检查 value 是否是原始 Number 数值型 或者 数值常量对象")]),t._v(" "),s("p",[s("strong",[t._v("Kind")]),t._v(": global function")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[s("code",[t._v("*")])]),t._v(" "),s("td",[t._v("要检查的值。")])])])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNumber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNumber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MIN_VALUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNumber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNumber")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => false")]),t._v("\n")])])]),s("p",[s("a",{attrs:{name:"isNumeric"}})]),t._v(" "),s("h2",{attrs:{id:"isnumeric-value-⇒-boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isnumeric-value-⇒-boolean"}},[t._v("#")]),t._v(" isNumeric(value) ⇒ "),s("code",[t._v("boolean")])]),t._v(" "),s("p",[t._v("检查 value 是否为全数字内容\n")]),s("p",[t._v("注：该方法包含所有 isNumber(value) 为 true 的情况，以及字符串类型的数字。即该方法比 isNumber 的条件更宽泛，可用于检测任意数字内容出现的场景。")]),t._v(" "),s("p",[t._v("注：NaN 也属于一个合法的数值型。")]),s("p"),t._v(" "),s("p",[s("strong",[t._v("Kind")]),t._v(": global function")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[s("code",[t._v("*")])]),t._v(" "),s("td",[t._v("要检查的值。")])])])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNumeric")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MIN_VALUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNumeric")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => false")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNumeric")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNumeric")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNumeric")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNumeric")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => true")]),t._v("\n")])])]),s("p",[s("a",{attrs:{name:"isNaN"}})]),t._v(" "),s("h2",{attrs:{id:"isnan-value-⇒-boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isnan-value-⇒-boolean"}},[t._v("#")]),t._v(" isNaN(value) ⇒ "),s("code",[t._v("boolean")])]),t._v(" "),s("p",[t._v("检查 value 是否是 NaN。")]),t._v(" "),s("p",[t._v("注意: 这个方法基于 "),s("a",{attrs:{href:"https://mdn.io/Number/isNaN",target:"_blank",rel:"noopener noreferrer"}},[t._v("Number.isNaN"),s("OutboundLink")],1),t._v("，和全局的\n"),s("a",{attrs:{href:"https://mdn.io/isNaN",target:"_blank",rel:"noopener noreferrer"}},[t._v("isNaN"),s("OutboundLink")],1),t._v(" 不同之处在于，全局的 "),s("a",{attrs:{href:"https://mdn.io/isNaN",target:"_blank",rel:"noopener noreferrer"}},[t._v("isNaN"),s("OutboundLink")],1),t._v(" 对于 undefined 和其他非数字的值返回 true。")]),t._v(" "),s("p",[s("strong",[t._v("Kind")]),t._v(": global function"),s("br"),t._v(" "),s("strong",[t._v("Returns")]),t._v(": "),s("code",[t._v("boolean")]),t._v(" - 如果 value 是一个 NaN，那么返回 true，否则返回 false。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[s("code",[t._v("*")])]),t._v(" "),s("td",[t._v("要检查的值。")])])])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNaN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => false")]),t._v("\n")])])]),s("p",[s("a",{attrs:{name:"random"}})]),t._v(" "),s("h2",{attrs:{id:"random-lower-upper-floating-⇒-number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#random-lower-upper-floating-⇒-number"}},[t._v("#")]),t._v(" random([lower], [upper], [floating]) ⇒ "),s("code",[t._v("number")])]),t._v(" "),s("p",[t._v("产生一个包括 lower 与 upper 之间的随机数。 如果只提供一个参数返回一个0到提供数之间的数。\n如果 floating 设为 true，或者 lower 或 upper 是浮点数，结果返回浮点数。")]),t._v(" "),s("p",[s("strong",[t._v("注意")]),t._v(": JavaScript 遵循 IEEE-754 标准处理无法预料的浮点数结果。")]),t._v(" "),s("p",[s("strong",[t._v("Kind")]),t._v(": global function"),s("br"),t._v(" "),s("strong",[t._v("Returns")]),t._v(": "),s("code",[t._v("number")]),t._v(" - 返回随机数。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("[lower]")]),t._v(" "),s("td",[s("code",[t._v("number")])]),t._v(" "),s("td",[s("code",[t._v("0")])]),t._v(" "),s("td",[t._v("下限。")])]),t._v(" "),s("tr",[s("td",[t._v("[upper]")]),t._v(" "),s("td",[s("code",[t._v("number")])]),t._v(" "),s("td",[s("code",[t._v("1")])]),t._v(" "),s("td",[t._v("上限。")])]),t._v(" "),s("tr",[s("td",[t._v("[floating]")]),t._v(" "),s("td",[s("code",[t._v("boolean")])]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("指定是否返回浮点数。")])])])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 0, 1, 2, 3, 4, 5")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 0, 1, 2, 3, 4, 5")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 0 到 5 之间的浮点数（如：1.6288619395308945，0.5192344462779486...）")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// lower 或 upper 为小数，且 floating 为 false，则严格按照对应的小数位数返回随机数结果")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.05")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 1, 1.01, 1.02, 1.03, 1.04, 1.05")]),t._v("\n")])])]),s("p",[s("a",{attrs:{name:"toFixed"}})]),t._v(" "),s("h2",{attrs:{id:"tofixed-value-size-processor-⇒-number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tofixed-value-size-processor-⇒-number"}},[t._v("#")]),t._v(" toFixed(value, size, [processor]) ⇒ "),s("code",[t._v("Number")])]),t._v(" "),s("p",[t._v("保留指定位数的小数")]),t._v(" "),s("p",[s("strong",[t._v("Kind")]),t._v(": global function")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[s("code",[t._v("Number")])]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("原数值")])]),t._v(" "),s("tr",[s("td",[t._v("size")]),t._v(" "),s("td",[s("code",[t._v("Number")])]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("需要保留的小数位数")])]),t._v(" "),s("tr",[s("td",[t._v("[processor]")]),t._v(" "),s("td",[s("code",[t._v("function")])]),t._v(" "),s("td",[s("code",[t._v("Math.round")])]),t._v(" "),s("td",[t._v("截断小数的处理函数，默认使用四舍五入函数")])])])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFixed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.468468")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 1.47")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFixed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.468468")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("floor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 1.46")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);