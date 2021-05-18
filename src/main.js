import Vue from 'vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from '@/router';

import { currency, dateformat, times, distance } from '@mudas/util';

import App from './App.vue';
import '@mudas/reset.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.component('data-testor', () => import('@/data-testor'));

Vue.filter('currency', currency);
Vue.filter('dateformat', dateformat);
Vue.filter('times', times);
Vue.filter('distance', distance);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
