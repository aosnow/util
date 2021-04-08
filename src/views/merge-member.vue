<!--------------------------------------------------
  name: merge-member.vue
  author: mudas( mschool.tech )
  created: 2021/4/2
---------------------------------------------------->

<template>
  <div class="merge-member">
    <data-testor :copy-value="copyValue.member" :source-value="memberData" @click="clickHandler"/>
  </div>
</template>

<script>
import Vue from 'vue';
import { increment } from '@/util/increment';

const memberData = {
  memberInfo: {
    uid: '202012281419210098',
    mobile: '13545105851',
    nick: '喵大斯',
    avatar: '/upload/avatar.png',
    isVip: null,
    binding: true
  },
  thirdUserInfo: {
    id: 6872,
    nickName: '喵大斯',
    userId: '20880008141732768406731140916109',
    thirdUserId: '2088002288842095',
    avatar: 'https://tfs.alipayobjects.com/images/partner/T15jJGXmXXXXXXXXXX',
    source: 1,
    thirdUserInfoId: 6872
  }
};

export default {
  name: 'merge-member',
  data() {
    return {
      memberData,
      copyValue: {
        member: {
          other: {
            a: 1
          },
          memberInfo: {
            uid: '',
            nick: ''
          }
        }
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

      increment(this.copyValue.member, memberData);

      console.warn(Date.now() - t);
    }
  }
};
</script>

<style lang="scss">
.merge-member {}
</style>
