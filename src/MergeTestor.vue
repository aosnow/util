<!--------------------------------------------------
  name: MergeTestor.vue
  author: mudas( mschool.tech )
  created: 2021/3/26
---------------------------------------------------->

<template>
  <div class="merge-testor">
    <el-button @click="clickHandler">合并</el-button>

    <div class="merge-testor__c">
      <div class="l">
        <h2>copy:</h2>
        <pre>{{copy}}</pre>
      </div>

      <div class="r">
        <h2>config:</h2>
        <pre>{{config}}</pre>
      </div>
    </div>

  </div>
</template>

<script>
import { clone, merge } from '@mudas/util';
import Config from './test-data';

export default {
  name: 'merge-testor',
  data() {
    return {
      copy: null,
      config: Config,

      newData: {
        default: {
          company: '银盒子（预发）' // 公司名称
        }
      }
    };
  },

  created() {

  },

  methods: {
    clickHandler() {
      const c = clone(this.config);
      console.warn(JSON.stringify(c));
      this.copy = merge({}, c, this.newData);
    }
  }
};
</script>

<style lang="css">
.merge-testor {

}

.merge-testor__c {
  width: 100%;
  display: flex;
}

.merge-testor__c .l {
  flex: 1;
  max-height: 500px;
  overflow-y: auto;
  border: 2px solid #3eaf7c;
}

.merge-testor__c .r {
  flex: 1;
  max-height: 500px;
  overflow-y: auto;
  border: 2px solid #3eaf7c;
}
</style>
