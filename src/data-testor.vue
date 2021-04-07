<!--------------------------------------------------
  name: MergeTestor.vue
  author: mudas( mschool.tech )
  created: 2021/3/26
---------------------------------------------------->

<template>
  <div class="data-testor">
    <el-button v-for="(btn,index) in buttons" :key="index" @click="clickHandler(index)">{{btn}}</el-button>

    <div class="data-testor__c">
      <div class="block">
        <h2 class="block__title">copy:</h2>
        <pre class="block__value" contenteditable>{{copyValue}}</pre>
      </div>

      <div class="block">
        <h2 class="block__title">source:</h2>
        <pre class="block__value" contenteditable>{{sourceValue}}</pre>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'data-testor',

  props: {
    copyValue: [String, Object],
    sourceValue: [String, Object],

    buttons: {
      type: Array,
      default() {
        return ['测试'];
      }
    }
  },

  data() {
    return {};
  },

  methods: {
    clickHandler(index) {
      this.$emit('click', index);
    }
  }
};
</script>

<style lang="scss">
$--color: #3eaf7c;

.data-testor {

  &__c {
    width: 100%;
    display: flex;

    .block {
      flex: 1;
      max-width: 48%;
      max-height: 600px;
      border: 5px solid rgba($--color, .05);
      margin: 5px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;

      &__title {
        color: $--color;
        font-weight: bold;
        flex: 0 0 40px;
        line-height: 40px;
        text-indent: .5em;
        background: rgba($--color, .2);
      }

      &__value {
        flex: 1;
        color: $--color;
        font-size: 12px;
        font-family: "Courier New", sans-serif;
        line-height: 1.5;
        padding: 5px;
        overflow: auto;
      }
    }

  }

}

</style>
