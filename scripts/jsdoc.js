// ------------------------------------------------------------------------------
// name: jsdoc
// author: mudas( mschool.tech )
// created: 2021/2/25 11:30
// ------------------------------------------------------------------------------

const fs = require('fs');
const path = require('path');
const jsdoc2md = require('jsdoc-to-markdown');

const PATH_DOC = resolve('../docs/');
const libPath = resolve('../packages');

const template = `{{>main}}`;
const dir = fs.readdirSync(libPath, { withFileTypes: true });
const exclude = ['index', 'debug'];

// 生成单独的工具 API 文件
dir.forEach(file => {
  const fileData = path.parse(file.name);
  const realpath = path.resolve(libPath, file.name);

  if (!file.isFile() || exclude.indexOf(fileData.name) !== -1) return;

  jsdoc2md.render({
    files: realpath,
    template
  }).then(data => {
    fs.writeFile(`${PATH_DOC}/${fileData.name}.md`, data, (err) => {
      if (err) throw err;
    });
  });
});

jsdoc2md.clear();

// // 生成 guide 导航页
// const guideGroup = require('../docs/.vuepress/config').themeConfig.sidebar;
// let guideData = `
// ## 快速安装
// \`\`\`bash
// npm install @mudas/util -S
// \`\`\`
//
// ## 构建参数
// 默认情况下 babel-loader 不转译所有 node_modules 中的文件，因此单独指定 node_modules 需要让 babel 转译的 esm 模块
// \`\`\`js
// module.exports = {
//   transpileDependencies: [
//     '@mudas/*'
//   ]
// };
// \`\`\`
// > 注意：以上为 \`vue.config.js\` 配置方法，其它构建环境请自行查阅相关文档。
//
// ## 使用示例
// \`\`\`js
// import {isArray} from '@mudas/util';
//
// isArray([1, 2, 3]);
// // => true
// \`\`\`
//
// ## 工具目录
// `;
// guideGroup.forEach(item => {
//   guideData += genLinkList(item) + '\n';
// });
//
// fs.writeFile(`${PATH_DOC}/guide.md`, guideData, (err) => {
//   if (err) throw err;
// });
//
// // 生成首页
// const homeData = `---
// home: true
// heroImage: '/hero.png'
// heroText: '@mudas/util'
// tagline: 服务于常用业务场景的公共工具库
// actionText: 快速上手指南 →
// actionLink: /guide
// features:
// - title: 简洁精悍
//   details: 仅依赖 currency.js 和 dayjs，构建后文件大小仅 30kb。
// - title: 支持 ES6
//   details: 构建 ES6 包 util.esm.js，支持 ES6 tree-shaking。
// - title: 支持力度
//   details: 目前涵盖数据类型、日期时间、地图、货币、地址、合并等方面的纯JS工具函数。并且适用于小程序开发环境。
// footer: MIT Licensed | Copyright © 2021 mudas
// ---
// `;
// fs.writeFile(`${PATH_DOC}/README.md`, homeData, (err) => {
//   if (err) throw err;
// });

function resolve(...dir) {
  return path.join(__dirname, ...dir);
}

// function genLinkList(item) {
//   if (typeof item === 'string') {
//     return `[${item}](${item})`;
//   }
//   else if (Array.isArray(item)) {
//     return `[${item[1]}](${item[0]})`;
//   }
//   else if (Array.isArray(item.children)) {
//     return `### ${item.title}\n${item.children.map(childItem => `- ${genLinkList(childItem)}`).join('\n')}`;
//   }
// }
