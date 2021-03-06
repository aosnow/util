# @mudas/util

> A tools library of null、boolean、number、string、datetime、object、array、function、url、currency、map

**说明：**
该工具同样适用于小程序开发环境（尤其是 uni-app 开发环境），旨在小程序开发中替代 lodash，且与 H5 项目实现工具统一。

**文档：** [点击查阅使用手册](https://aosnow.github.io/util/)


## 快速安装
```bash
npm install @mudas/util -S
```

## 构建参数
默认情况下 babel-loader 不转译所有 node_modules 中的文件，因此单独指定 node_modules 需要让 babel 转译的 esm 模块
```js
module.exports = {
  transpileDependencies: [
    '@mudas/*'
  ]
};
```
> 注意：以上为 `vue.config.js` 配置方法，其它构建环境请自行查阅相关文档。

## 使用示例
```js
import {isArray} from '@mudas/util';

isArray([1, 2, 3]);
// => true
```

## 目录
[快速上手指南](https://aosnow.github.io/util/guide)
### 数据类型工具
- [boolean 布尔值工具](https://aosnow.github.io/util/boolean)
- [number 数值工具](https://aosnow.github.io/util/number)
- [string 字符串工具](https://aosnow.github.io/util/string)
- [object 对象工具](https://aosnow.github.io/util/object)
- [null 工具](https://aosnow.github.io/util/null)
- [empty 空值工具](https://aosnow.github.io/util/empty)
- [array 数组工具](https://aosnow.github.io/util/array)
- [function 函数工具](https://aosnow.github.io/util/function)
- [file 文件内容工具](https://aosnow.github.io/util/file)
- [buffer 工具](https://aosnow.github.io/util/buffer)
- [form 表单内容工具](https://aosnow.github.io/util/form)
### 日期时间工具
- [datetime 日期时间工具](https://aosnow.github.io/util/datetime)
### 数据赋值取值工具
- [assign 赋值取值工具](https://aosnow.github.io/util/assign)
### 数据深度合并工具
- [merge 合并工具](https://aosnow.github.io/util/merge)
### 数据克隆工具
- [clone 克隆工具](https://aosnow.github.io/util/clone)
### 货币工具
- [currency 货币工具](https://aosnow.github.io/util/currency)
### 地图工具
- [map 地图工具](https://aosnow.github.io/util/map)
### URL 地址处理工具
- [url 地址工具](https://aosnow.github.io/util/url)
