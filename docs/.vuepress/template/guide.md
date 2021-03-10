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
