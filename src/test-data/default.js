// ------------------------------------------------------------------------------
// name: default
// author: mudas( mschool.tech )
// created: 2021/3/25 17:09
// ------------------------------------------------------------------------------

// 默认配置信息
export default {

  company: '银盒子（测试）', // 公司名称
  name: '', // 应用名称
  // description: '', // 简介
  // register: true, // 是否开启注册功能
  // accountLogin: true, // 是否开启帐号密码登录
  // phoneLogin: false, // 是否开启手机短信登录
  // qrcodeLogin: false, // 是否开启扫码登录
  // oldLogin: false, // 是否开启老后台登录

  // logo 图片地址
  logo: {
    enabled: true, // 是否显示
    title: '', // 默认显示为 company+name
    image: '', // logo 图片地址
    test: [
      0, 1, { a: 1 }
    ]
  }

  // // 右上菜单列表
  // menus: {
  //   enabled: true, // 是否显示
  //   separator: '|', // 分隔符
  //   data: [
  //     { name: '下载商家APP', url: 'http://www.possaas.com/xt/APP/' },
  //     { name: '0571-28175066' }
  //   ]
  // },
  //
  // // 页面底部链接列表
  // // 若 url 存在则显示为 a 链接；若为空，则仅使用 span 标签显示纯文本
  // links: {
  //   enabled: true, // 是否显示
  //   content: '', // 若 content 不为空，则将忽略所有 data 中的链接列表，直接显示该纯文本 content
  //   separator: '|', // 分隔符
  //   data: [
  //     { name: '管理员', url: 'https://cloud.blibao.com/server/account/toAdministratorLogin.htm' },
  //     { name: '商家', url: 'https://cloud.blibao.com/server/account/toShopperLogin.htm' },
  //     { name: '广告商', url: 'https://cloud.blibao.com/server/account/toAdvertiserLogin.htm' },
  //     { name: '运维', url: 'https://cloud.blibao.com/server/account/operationLogin.htm' },
  //     { name: '服务商', url: 'https://fac.blibao.com/' },
  //     { name: '供应商', url: 'https://b2b.blibao.com/supplier' }
  //   ]
  // },
  //
  // // 版权配置（若需要隐藏请设置为空）
  // copyright: '©2021 blibao.com Inc.All Rights Reserved.银盒宝成'
};
