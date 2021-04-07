<!--------------------------------------------------
  name: merge-data.vue
  author: mudas( mschool.tech )
  created: 2021/4/2
---------------------------------------------------->

<template>
  <div class="merge-data">
    <data-testor :buttons="['merge 测试',' set value 测试']" :copy-value="copyValue" :source-value="object" @click="clickHandler"/>
  </div>
</template>

<script>
import { merge } from '@mudas/util';
import Vue from 'vue';

export default {
  name: 'merge-data',
  data() {
    return {
      copyValue: {
        a: [{ b: 2 }, { d: 4 }, 88],
        b: { b1: 2, b2: { b21: 31 } },
        c: 0
      },

      object: {
        // a: [{ b: 3 }, { d: 5 }, 99],
        // b: { b1: 3, b2: { b21: 62 } },
        // c: 1
      },

      other: {
        // a: [{ c: 3 }, { e: 5 }, [1, 2, { g: 88 }], 100],
        // b: { b1: 1, b2: { b21: 21 }, b3: { b32: 32 } },
        // c: 100
      },

      otherB: {
        a: [{ a1: 8 }],
        c: { c1: 8 }
      }
    };
  },

  methods: {
    mergeValue(target, key, newValue) {
      // console.warn(JSON.stringify(target), key, newValue);
      Vue.set(target, key, newValue);
    },

    clickHandler(index) {
      const t = Date.now();

      if (index === 0) {
        console.warn(this.copyValue);
        // this.copyValue = {};
        const result = merge(this.copyValue, this.object, this.other, this.otherB, this.mergeValue);
        // console.warn(result);
        // console.warn(this.object);
        // this.copyValue = result;
      }
      else {
        // this.copyValue.c2 = 100;
        merge(this.copyValue, { c2: 100, c: { c2: 100 } }, this.mergeValue);
      }

      console.warn(Date.now() - t);
    }
  }
};
</script>

<style lang="scss">
.merge-data {}
</style>
