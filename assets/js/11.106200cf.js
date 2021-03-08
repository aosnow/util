(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{366:function(t,a,s){"use strict";s.r(a);var e=s(40),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),s("dl",[s("dt",[s("a",{attrs:{href:"#isDate"}},[t._v("isDate(value)")]),t._v(" ⇒ "),s("code",[t._v("boolean")])]),t._v(" "),s("dd",[s("p",[t._v("检查 value 是否是 Date 对象。")])]),t._v(" "),s("dt",[s("a",{attrs:{href:"#parseTime"}},[t._v("parseTime(value)")]),t._v(" ⇒ "),s("code",[t._v("Object")])]),t._v(" "),s("dd",[s("p",[t._v("解析字符串时间")])]),t._v(" "),s("dt",[s("a",{attrs:{href:"#genDate"}},[t._v("genDate(option)")]),t._v(" ⇒ "),s("code",[t._v("Date")])]),t._v(" "),s("dd",[s("p",[t._v("根据指定的自选参数，生成日期对象")]),t._v(" "),s("p",[t._v("该方法的参数一般可使用 parseTime 进行得到。")])]),t._v(" "),s("dt",[s("a",{attrs:{href:"#betweenDate"}},[t._v("betweenDate(businessTime, [now])")]),t._v(" ⇒ "),s("code",[t._v("boolean")])]),t._v(" "),s("dd",[s("p",[t._v("检测当前时间是否在指定时间范围内（毫秒级对比，一般用于检测当前时间是否在店铺营业时间范围内）")])]),t._v(" "),s("dt",[s("a",{attrs:{href:"#dateformat"}},[t._v("dateformat([dateInfo], [format])")]),t._v(" ⇒ "),s("code",[t._v("string")])]),t._v(" "),s("dd",[s("p",[t._v("格式化日期信息为指定格式")])]),t._v(" "),s("dt",[s("a",{attrs:{href:"#times"}},[t._v("times(ms, [all], [unit])")])]),t._v(" "),s("dd",[s("p",[t._v("将毫秒转化为相应的时间字符串")])])]),t._v(" "),s("p",[s("a",{attrs:{name:"isDate"}})]),t._v(" "),s("h2",{attrs:{id:"isdate-value-⇒-boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isdate-value-⇒-boolean"}},[t._v("#")]),t._v(" isDate(value) ⇒ "),s("code",[t._v("boolean")])]),t._v(" "),s("p",[t._v("检查 value 是否是 Date 对象。")]),t._v(" "),s("p",[s("strong",[t._v("Kind")]),t._v(": global function"),s("br"),t._v(" "),s("strong",[t._v("Returns")]),t._v(": "),s("code",[t._v("boolean")]),t._v(" - 如果 value 是一个日期对象，那么返回 true，否则返回 false。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[s("code",[t._v("*")])]),t._v(" "),s("td",[t._v("要检查的值。")])])])]),t._v(" "),s("p",[s("a",{attrs:{name:"parseTime"}})]),t._v(" "),s("h2",{attrs:{id:"parsetime-value-⇒-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parsetime-value-⇒-object"}},[t._v("#")]),t._v(" parseTime(value) ⇒ "),s("code",[t._v("Object")])]),t._v(" "),s("p",[t._v("解析字符串时间")]),t._v(" "),s("p",[s("strong",[t._v("Kind")]),t._v(": global function"),s("br"),t._v(" "),s("strong",[t._v("Returns")]),t._v(": "),s("code",[t._v("Object")]),t._v(" - 年，月，日，小时，分钟，秒数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[t._v("如：06:00或者06:00:00（同时支持 '2021-02-01 06:00:00' 的完整日期字符串）")])])])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'06:00'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// now at '2021-03-02 16:00'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => { year:2021, month:3, day:2, hour:6, minute:0, second:0 }")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021-03-02 16:00:00'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => { year:2021, month:3, day:2, hour:16, minute:0, second:0 }")]),t._v("\n")])])]),s("p",[s("a",{attrs:{name:"genDate"}})]),t._v(" "),s("h2",{attrs:{id:"gendate-option-⇒-date"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gendate-option-⇒-date"}},[t._v("#")]),t._v(" genDate(option) ⇒ "),s("code",[t._v("Date")])]),t._v(" "),s("p",[t._v("根据指定的自选参数，生成日期对象\n")]),s("p",[t._v("该方法的参数一般可使用 parseTime 进行得到。")]),s("p"),t._v(" "),s("p",[s("strong",[t._v("Kind")]),t._v(": global function")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("option")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("日期时间参数")])]),t._v(" "),s("tr",[s("td",[t._v("[option.year]")]),t._v(" "),s("td",[s("code",[t._v("Number")])]),t._v(" "),s("td",[t._v("年")])]),t._v(" "),s("tr",[s("td",[t._v("[option.month]")]),t._v(" "),s("td",[s("code",[t._v("Number")])]),t._v(" "),s("td",[t._v("月")])]),t._v(" "),s("tr",[s("td",[t._v("[option.day]")]),t._v(" "),s("td",[s("code",[t._v("Number")])]),t._v(" "),s("td",[t._v("日")])]),t._v(" "),s("tr",[s("td",[t._v("[option.hour]")]),t._v(" "),s("td",[s("code",[t._v("Number")])]),t._v(" "),s("td",[t._v("小时")])]),t._v(" "),s("tr",[s("td",[t._v("[option.minute]")]),t._v(" "),s("td",[s("code",[t._v("Number")])]),t._v(" "),s("td",[t._v("分钟")])]),t._v(" "),s("tr",[s("td",[t._v("[option.second]")]),t._v(" "),s("td",[s("code",[t._v("Number")])]),t._v(" "),s("td",[t._v("秒")])])])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("genDate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("year"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" month"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" day"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hour"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => Date")]),t._v("\n")])])]),s("p",[s("a",{attrs:{name:"betweenDate"}})]),t._v(" "),s("h2",{attrs:{id:"betweendate-businesstime-now-⇒-boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#betweendate-businesstime-now-⇒-boolean"}},[t._v("#")]),t._v(" betweenDate(businessTime, [now]) ⇒ "),s("code",[t._v("boolean")])]),t._v(" "),s("p",[t._v("检测当前时间是否在指定时间范围内（毫秒级对比，一般用于检测当前时间是否在店铺营业时间范围内）")]),t._v(" "),s("p",[s("strong",[t._v("Kind")]),t._v(": global function")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("businessTime")]),t._v(" "),s("td",[s("code",[t._v("String")]),t._v(" | "),s("code",[t._v("Array.<String>")])]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("指定时间范围（如 '00:00~23:59'）")])]),t._v(" "),s("tr",[s("td",[t._v("[now]")]),t._v(" "),s("td",[s("code",[t._v("Number")]),t._v(" | "),s("code",[t._v("Date")])]),t._v(" "),s("td",[s("code",[t._v("Date.now()")])]),t._v(" "),s("td",[t._v("待检测目标时间（默认取当前时间）")])])])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("betweenDate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'08:08:59~23:08:59'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => true // now at '10:08:59'")]),t._v("\n")])])]),s("p",[s("a",{attrs:{name:"dateformat"}})]),t._v(" "),s("h2",{attrs:{id:"dateformat-dateinfo-format-⇒-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dateformat-dateinfo-format-⇒-string"}},[t._v("#")]),t._v(" dateformat([dateInfo], [format]) ⇒ "),s("code",[t._v("string")])]),t._v(" "),s("p",[t._v("格式化日期信息为指定格式")]),t._v(" "),s("p",[s("strong",[t._v("Kind")]),t._v(": global function")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("[dateInfo]")]),t._v(" "),s("td",[s("code",[t._v("String")]),t._v(" | "),s("code",[t._v("Number")]),t._v(" | "),s("code",[t._v("Date")])]),t._v(" "),s("td",[s("code")]),t._v(" "),s("td",[t._v("日期数据信息")])]),t._v(" "),s("tr",[s("td",[t._v("[format]")]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[s("code",[t._v("'YYYY-MM-DD'")])]),t._v(" "),s("td",[t._v("目标格式（默认：'YYYY-MM-DD'，其它：'HH:mm:ss'），具体参考"),s("a",{attrs:{href:"https://dayjs.gitee.io/docs/zh-CN/display/format",target:"_blank",rel:"noopener noreferrer"}},[t._v("format"),s("OutboundLink")],1)])])])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dateformat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021/02/20 08:08:59'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 2021-02-20")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dateformat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021/02/20 08:08:59'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY-MM-DD HH:mm:ss'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 2021-02-20 08:08:59")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dateformat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1611961835705")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY-MM-DD HH:mm:ss'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 2021-01-30 07:10:35")]),t._v("\n")])])]),s("p",[s("a",{attrs:{name:"times"}})]),t._v(" "),s("h2",{attrs:{id:"times-ms-all-unit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#times-ms-all-unit"}},[t._v("#")]),t._v(" times(ms, [all], [unit])")]),t._v(" "),s("p",[t._v("将毫秒转化为相应的时间字符串")]),t._v(" "),s("p",[s("strong",[t._v("Kind")]),t._v(": global function")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Param")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ms")]),t._v(" "),s("td",[s("code",[t._v("Number")])]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("毫秒数")])]),t._v(" "),s("tr",[s("td",[t._v("[all]")]),t._v(" "),s("td",[s("code",[t._v("Boolean")])]),t._v(" "),s("td",[s("code",[t._v("true")])]),t._v(" "),s("td",[t._v("是否输出所有符合条件的数值（若为 false，则只取按“天>小时>分钟>秒”的优先级显示后缀）")])]),t._v(" "),s("tr",[s("td",[t._v("[unit]")]),t._v(" "),s("td",[s("code",[t._v("Object")])]),t._v(" "),s("td",[s("code",[t._v("{ day: '天', hour: '小时', minute: '分', second: '秒' }")])]),t._v(" "),s("td",[t._v("默认后缀单位")])])])]),t._v(" "),s("p",[s("strong",[t._v("Example")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("times")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000760")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => '2小时30分0秒'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("times")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000760")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => '3小时'")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);