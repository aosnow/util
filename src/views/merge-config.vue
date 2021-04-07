<!--------------------------------------------------
  name: merge-config.vue
  author: mudas( mschool.tech )
  created: 2021/4/2
---------------------------------------------------->

<template>
  <div class="merge-config">
    <data-testor :copy-value="copyValue" :source-value="sourceValue" @click="clickHandler"/>
  </div>
</template>

<script>
// import { merge } from 'lodash-es';
import { merge } from '@mudas/util';
import Config from '../test-data';

export default {
  name: 'merge-config',
  data() {
    return {
      copyValue: '',
      sourceValue: Config,

      newData: {
        default: {
          company: '银盒子（预发）', // 公司名称
          menus: {
            enabled: true,
            separator: '||',
            data: [
              {
                name: '即刻拥有APP',
                url: 'http://www.possaas.com/xt/APP/'
              },
              {
                name: '0571-88888888'
              }
            ]
          }
        }
      }
    };
  },

  methods: {
    clickHandler() {
      const t = Date.now();
      // debugger;
      this.copyValue = merge(this.sourceValue, this.newData);
      // for (let i = 0; i < 1000; i++) {
      //   merge({}, this.sourceValue, this.newData);
      // }
      console.warn('time:', Date.now() - t);
    }
  }
};
</script>

<style lang="scss">
.merge-config {}
</style>
