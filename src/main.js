import Vue from 'vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from '@/router';

import App from './App.vue';
import '@mudas/reset.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.component('data-testor', () => import('@/data-testor'));

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');