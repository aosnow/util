// ------------------------------------------------------------------------------
// name: router
// author: mudas( mschool.tech )
// created: 2021/4/2 15:30
// ------------------------------------------------------------------------------

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// 路由配置
export const routesConfig = [
  { path: '/data-setget', component: () => import('@/views/data-setget'), meta: { title: 'set/get 测试' } },
  { path: '/merge-data', component: () => import('@/views/merge-data'), meta: { title: 'merge 数据测试' } },
  { path: '/merge-config', component: () => import('@/views/merge-config'), meta: { title: 'merge Object配置 测试' } }
];

// 默认路由
const routesConfigWithDefault = [
  { path: '', redirect: routesConfig[0].path },
  { path: '/', redirect: routesConfig[0].path },
  ...routesConfig
];

// 创建路由实例
export const router = new Router({
  // mode: 'history',
  routes: routesConfigWithDefault
});

export default router;
