<!--------------------------------------------------
  name: data-setget.vue
  author: mudas( mschool.tech )
  created: 2021/4/2
---------------------------------------------------->

<template>
  <div class="data-setget">
    {{100|currency}}
    <data-testor :buttons="['get 测试',' set 测试']" :copy-value="copyValue" :source-value="sourceValue" @click="clickHandler"/>
  </div>
</template>

<script>
import { get, set } from '@mudas/util';

export default {
  name: 'data-setget',
  data() {
    return {
      copyValue: '',
      sourceValue: {
        a: [{ b: 2 }, { d: 4 }, 88],
        b: { b1: 2, b2: { b21: 31 } },
        c: 0
      }
    };
  },

  methods: {
    print(key, value) {
      this.copyValue += `${key}\t\t\t${value}\n`;
    },

    customSet(nested, key, newValue) {
      if (newValue !== nested[key]) this.$set(nested, key, newValue);
    },

    clickHandler(index) {
      if (index === 0) {
        const v1 = get(this.sourceValue, 'a[0].b');
        console.warn(v1);
        this.print('a[0].b', v1);

        const v2 = get(this.sourceValue, 'a[0].c');
        console.warn(v2);
        this.print('a[0].c', v2);

        const v3 = get(this.sourceValue, ['a', 0, 'c']);
        console.warn(v3);
        this.print(['a', 0, 'c'], v3);

        const v4 = get(this.sourceValue, 'a[2][2].g');
        console.warn(v4);
        this.print('a[2][2].g', v4);

        const v5 = get(this.sourceValue, 'a[2][2].g2');
        console.warn(v5);
        this.print('a[2][2].g2', v5);
      }
      else {
        set(this.sourceValue, 'a[2][2].g2', 998, this.customSet);
        console.warn(get(this.sourceValue, 'a[2][2].g2'));
      }
    }
  }
};
</script>

<style lang="scss">
.data-setget {}
</style>
