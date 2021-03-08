
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

## 工具目录
[快速上手指南](./guide)
### 数据类型工具
- [boolean 布尔值工具](./boolean)
- [number 数值工具](./number)
- [string 字符串工具](./string)
- [object 对象工具](./object)
- [null 空值工具](./null)
- [array 数组工具](./array)
- [function 函数工具](./function)
### 日期时间工具
- [datetime 日期时间工具](./datetime)
### 数据深度合并工具
- [merge 合并工具](./merge)
### 货币工具
- [currency 货币工具](./currency)
### 地图工具
- [map 地图工具](./map)
### URL 地址处理工具
- [url 地址工具](./url)
