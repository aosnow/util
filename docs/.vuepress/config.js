// ------------------------------------------------------------------------------
// name: config
// author: mudas( mschool.tech )
// created: 2021/2/25 10:36
// ------------------------------------------------------------------------------

const fs = require('fs');
const pkg = require('../../package.json');

module.exports = {
  // 如果你的网站部署到非根 URL，则需要在 .vuepress/config.js 中设置 base 选项。
  // 例如，如果你打算将你的网站部署到 https://foo.github.io/bar/，那么base应该设置为 "/bar/"（它应该始终以斜杠开始和结束）
  // 参考：http://caibaojian.com/vuepress/guide/assets.html#基准-url
  base: '/util/',

  title: `${pkg.name}<v${pkg.version}>`,
  description: pkg.description,

  cache: false,

  theme: '@vuepress/default',
  themeConfig: {
    sidebarDepth: 2,
    displayAllHeaders: true,
    smoothScroll: true,
    nav: [
      { text: '首页', link: './' },
      { text: '指南', link: './guide' },
      { text: 'Github', link: 'https://github.com/aosnow/util', target: '_blank' }
    ],

    sidebar: [
      ['./guide', '快速上手指南'],
      {
        title: '数据类型工具',
        path: './boolean',
        children: [
          ['./boolean', 'boolean 布尔值工具'],
          ['./number', 'number 数值工具'],
          ['./string', 'string 字符串工具'],
          ['./object', 'object 对象工具'],
          ['./null', 'null 工具'],
          ['./empty', 'empty 空值工具'],
          ['./array', 'array 数组工具'],
          ['./function', 'function 函数工具'],
          ['./file', 'file 文件内容工具'],
          ['./buffer', 'buffer 工具'],
          ['./form', 'form 表单内容工具']
        ]
      },
      {
        title: '日期时间工具',
        path: './datetime',
        children: [
          ['./datetime', 'datetime 日期时间工具']
        ]
      },
      {
        title: '数据深度合并工具',
        path: './merge',
        children: [
          ['./merge', 'merge 合并工具']
        ]
      },
      {
        title: '货币工具',
        path: './currency',
        children: [
          ['./currency', 'currency 货币工具']
        ]
      },
      {
        title: '地图工具',
        path: './map',
        children: [
          ['./map', 'map 地图工具']
        ]
      },
      {
        title: 'URL 地址处理工具',
        path: './url',
        children: [
          ['./url', 'url 地址工具']
        ]
      }
    ]
  }
};
