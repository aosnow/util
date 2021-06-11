<!--------------------------------------------------
  name: merge-data.vue
  author: mudas( mschool.tech )
  created: 2021/4/2
---------------------------------------------------->

<template>
  <div class="merge-data">
    <data-testor :buttons="['merge 测试',' set value 测试', '合并策略测试']" :copy-value="copyValue" :source-value="object" @click="clickHandler"/>
  </div>
</template>

<script>

import Vue from 'vue';
import { merge, ARRAY_MERGE, ARRAY_REPLACE } from '@mudas/util';

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
      else if (index === 1) {
        // this.copyValue.c2 = 100;
        merge(this.copyValue, { c2: 100, c: { c2: 100 } }, this.mergeValue);
      }
      else {
        // 合并策略测试
        // this.copyValue = {
        //   a: [{ b: 2 }, { d: 4 }]
        // };
        //
        // this.object = {
        //   a: [{ c: 3 }, { e: 5 }]
        // };
        //
        // merge(this.copyValue, this.object, this.mergeValue, ARRAY_REPLACE);

        const a = {
          company: '银盒子',
          name: '商家中心',
          description: '',
          register: true,
          accountLogin: true,
          phoneLogin: true,
          qrcodeLogin: true,
          oldLogin: true,
          oldLoginText: '账号是在 2018-7-18 前注册的，首次登录请点击左下角老后台登录',
          favicon: 'static/img/silverbox.f0ebc794.ico',
          background: {
            color: '',
            image: ''
          },
          logo: {
            enabled: true,
            title: '银盒子商家中心',
            image: 'data:image/png;base64,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'
          },
          menus: {
            enabled: true,
            separator: '|',
            data: [
              {
                name: '下载商家APP',
                url: 'http://www.possaas.com/xt/APP/'
              },
              {
                name: '0571-28175066'
              }
            ]
          },
          links: {
            enabled: true,
            content: '',
            separator: '|',
            data: [
              {
                name: '管理员',
                url: 'https://cloud.blibao.com/server/account/toAdministratorLogin.htm'
              },
              {
                name: '商家',
                url: 'https://cloud.blibao.com/server/account/toShopperLogin.htm'
              },
              {
                name: '广告商',
                url: 'https://cloud.blibao.com/server/account/toAdvertiserLogin.htm'
              },
              {
                name: '运维',
                url: 'https://cloud.blibao.com/server/account/operationLogin.htm'
              },
              {
                name: '服务商',
                url: 'https://fac.blibao.com/'
              },
              {
                name: '供应商',
                url: 'https://b2b.blibao.com/supplier'
              }
            ]
          },
          copyright: '©2021 blibao.com Inc.All Rights Reserved.银盒宝成'
        };
        const b = {
          name: '商家中心',
          description: '智能新零售 聚焦新餐饮',
          root: 'http://web.blibao.com/businessCenter',
          homepage: '/',
          background: {
            color: '#071849',
            image: 'static/img/business.1d366d6a.jpg'
          },
          logo: {
            enabled: true
          },
          menus: {
            enabled: true
          },
          links: {
            enabled: true
          }
        };
        const c = {
          company: '鲁迅故里',
          name: '商家中心',
          description: '智能新零售 聚焦新餐饮',
          register: false,
          accountLogin: true,
          phoneLogin: false,
          qrcodeLogin: false,
          oldLogin: false,
          logo: {
            enabled: true,
            image: 'static/img/logo-luj.bfdb0100.png',
            title: '鲁迅故里-商家中心'
          },
          favicon: 'data:image/vnd.microsoft.icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAAAAAAAAAAAAC8zMQAuMzAGKi4tREhKSp+YnZ7ecnd3+SksKPkuMS3eLzIuny0xLUQsLysGLTArAAAAAAAAAAAAAAAAAJidoQC2vMAWRElKjEtOT+t7foD/rbKz/1NWVv8uMi3/MjYx/zE1Mf8wNDDrMzczjDk9OBY5PDgAAAAAANvh5gDi6O0WzdTYq3Z8gP1+g4X/rLCx/3+Cg/8tLy//MTQx/zM2M/8zNzP/MzYz/zQ4NP01ODWrNjk3FjU5NwDc4ucF3uTpjMDHy/5nbXH/i5CT/6arrf9LTk//LC4u/y8yMP8vMzD/MTUx/zQ3M/80NzP/MTQy/iwxL4wYIR8F2+LnRNjf5OmYn6L/UVha/3uBhf+SmJz/R0tM/zU4N/81Nzb/NTg1/zc6N/81ODX/MTQy/zg7O/9LUVHpfoWIRNrh5p+2vMH/f4WK/3+Gif/Dys//1dzh/290dv8/QkL/RUhH/0dJSP8/QUD/bXFy/5SanP+2u8D/ytHW/9bd4p/a4ebe1dvh/9Xc4f/Y3+T/3OPo/8HHzP9TWFn/ZWhn/4CCgv94env/ZWhq/8PJzv/e5er/3OPo/9vi5//a4ebe2uHm+drh5v/a4eb/2uHm/9zj6P+Vm5//Njo6/0RHRv9zdnf/rbGz/5GVmP/HztL/2+Ln/9rh5v/a4eb/2uHm+drh5vna4eb/2uHm/9rh5v/X3uP/iY2R/11gYf9ucHH/p6mq/7/Exf+EiIn/nKKl/9ri5//a4eb/2uHm/9rh5vna4ebe2uHm/9rh5v/b4uf/ytHV/2Nnav9xc3T/mpyd/5SWmP+0t7j/am1s/4eNj//b4uf/2uHm/9rh5v/a4ebe2uHmn9rh5v/a4eb/3OPp/6yytf9NT1D/j5GR/5mbm/90dXX/mJma/0ZJSP9/hIb/2+Ln/9rh5v/a4eb/2uHmn9vh50Ta4ebp2uHm/93k6f+pr7H/SUxJ/4uLiv+vsrH/srWz/4WGhv85Ojj/lZqc/9zj6P/a4eb/2uHm6dvh50Tc4ugF2uHmjNrh5v7b4uf/ydDU/2dubf9OUk//T1FP/1NWVP9FRkP/b3Jx/87U2P/b4uf/2uHm/trh5ozc4ugF2+HmANzi5xba4ear2uHm/dvi5//P19v/nqan/290dP+JjY7/nqKk/8zS1v/b4uf/2uHm/drh5qvc4ucW2+HmAAAAAADb4ecA3OLnFtrh5oza4ebr2+Ln/9vi5//a4eb/3OPo/9zk6f/b4uf/2uHm69rh5ozc4ucW2+HnAAAAAAAAAAAAAAAAANvh6ADc4egG2+HnRNrh5p/a4ebe2uHm+drh5vna4ebe2uHmn9vh50Tc4egG2+HoAAAAAAAAAAAA4AcAAMADAACAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAADAAwAA4AcAAA==',
          background: {
            color: '#004fb3',
            image: 'static/img/luj.73c36ca5.jpg'
          },
          menus: {
            enabled: false,
            separator: '|',
            data: [
              {
                name: '下载商家APP',
                url: 'http://www.possaas.com/xt/APP/'
              },
              {
                name: '0571-28175066'
              }
            ]
          },
          links: {
            enabled: true,
            data: []
          },
          copyright: '鲁迅故里-商家中心',
          root: 'http://lujshop.ekunpai.com/businessCenter',
          homepage: ''
        };

        this.copyValue = merge(a, b, c, ARRAY_REPLACE);
      }

      console.warn(Date.now() - t);
    }
  }
};
</script>

<style lang="scss">
.merge-data {}
</style>
