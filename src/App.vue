<template>
  <div id="app">
    <el-page-header title="返回" content="测试"></el-page-header>

    <!--<el-form>-->
    <!--  <div>-->
    <!--    <el-input v-model="value"></el-input>-->
    <!--  </div>-->

    <!--  <div>-->
    <!--    <el-input v-model="value2"></el-input>-->
    <!--    <el-alert title="取值：" type="info" :description="repeatValue"></el-alert>-->
    <!--  </div>-->
    <!--</el-form>-->

    <!--<pre>{{object}}</pre>-->
    <!--<el-button @click="clickHandler">merge 值</el-button>-->
    <!--<el-button @click="handler">执行相关操作</el-button>-->

    <div class="app__group">
      <el-button type="default" size="mini" round plain v-for="(conf, index) in routesConfig" :key="index" @click="topath({path:conf.path})">
        {{conf.meta.title}}
      </el-button>
    </div>

    <router-view/>

  </div>
</template>

<script>

import { routesConfig } from './router';

// import {
//   repeat,
//   trim,
//   isFunction,
//   noop,
//   isNumeric,
//   isNumber,
//   isNil,
//   isNull,
//   mergeURL,
//   dateformat,
//   times,
//   betweenDate,
//   random,
//   distance,
//   debounce,
//   currency,
//   camelCase,
//   kebabCase,
//   snakeCase,
//   merge,
//   hash,
//   get,
//   set
// } from '@mudas/util';

export default {
  name: 'app',
  mixins: [],

  data() {
    return {
      routesConfig,

      value: '',
      value2: '',
      handler: null
    };
  },

  // computed: {
  //   repeatValue() {
  //     return repeat(trim(this.value2), 3);
  //   }
  // },

  created() {
    // console.warn('-1', !(-1), !!-1);
    // console.warn('[]', !([]), !![]);
    // console.warn('[1]', !([1]), !![1]);
    // console.warn('NaN', !(NaN), !!NaN);
    // console.warn('\'\'', !(''), !!'');
    // console.warn('null', !(null), !!null);
    //
    // console.warn('noop', isFunction(noop));
    // console.warn('isTrue', isFunction(setTimeout));
    // console.warn('[]', isFunction([]));
    //
    // console.warn('123', isNumeric(123), isNumber(123));
    // console.warn('"567"', isNumeric('567'), isNumber('567'));
    // console.warn('Number.MIN_VALUE', isNumeric(Number.MIN_VALUE), isNumber(Number.MIN_VALUE));
    // console.warn('10e+12', isNumeric(10e+12), isNumber(10e+12));
    // console.warn('NaN', isNumeric(NaN), isNumber(NaN));
    // console.warn('Infinity', isNumeric(Infinity), isNumber(Infinity));
    //
    // console.warn('isNil(null)', isNil(null), isNil(undefined));
    //
    // console.warn(mergeURL('http://img.xxx.com', 'a', '2021-01-30', '/upload/xxx.jpg'));
    //
    // console.warn(dateformat(1611961835705, 'YYYY-MM-DD HH:mm:ss'));
    //
    // console.warn(times(9000760));
    //
    // console.warn(betweenDate('2022-01-30 00:00~2022-01-30 00:00', new Date('2022-01-30 22:00')));

    // const INFINITY = 1 / 0;
    // console.warn('random()', random());
    // console.warn('random(5)', random(-INFINITY, INFINITY));
    // console.warn('random(-5,5)', random(-5, 5));

    // this.handler = debounce(() => {
    //   // console.warn('random(-5,5)', random(-5, 5));
    //   console.warn(hash(false));
    // }, 1000, false);

    // console.warn(currency(123654.10, false));

    // console.warn(camelCase('Foo Bar'));
    // console.warn(camelCase('fooBar'));
    // console.warn(camelCase('--foo-bar--'));
    // console.warn(camelCase('__FOO_BAR__'));

    // console.warn(kebabCase('Foo Bar'));
    // console.warn(kebabCase('fooBar'));
    // console.warn(kebabCase('__FOO_BAR__'));

    // console.warn(snakeCase('Foo Bar'));
    // console.warn(snakeCase('fooBar'));
    // console.warn(snakeCase('--foo-bar--'));
    // this.testGet();
    // this.testSet();
    //
    // const object = {};
    // set(object, ['x', '0', 'y', 'z'], 5);
    // console.log(object);
  },

  methods: {
    topath(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 20px;
}

.app__group {
  margin-bottom: 20px;

  .el-button {
    //display: block;
    margin: 2px;
  }

  .el-button + .el-button {
    margin-left: 0;
  }

}
</style>
