<template>
  <div class="home">
    <input type="text" v-model="obj.msg">
  </div>
</template>

<script>

import { MixinsFn } from '@/mixins/index.js';

export default {
  name: 'HomeView',  
  data() {
    return {
      obj: {
        msg: 'hello',
        age: 18
      }
    }
  },
  methods: {

  },
  created() { // 打印出来的顺序是: 混入对象的created -> 组件的created
    console.log('created');
  },
  mixins: [MixinsFn], // 使用混入, 会将混入对象的所有属性都合并到当前组件实例中
  // 混入比组件的生命周期早, 混入对象的生命周期 -> 组件的生命周期
  // minxins优先级高于组件的生命周期

}
</script>

<style lang="less" scoped></style>