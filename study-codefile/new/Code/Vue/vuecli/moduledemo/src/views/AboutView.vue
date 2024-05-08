<template>
  <div class="about">
    <h3>minxins优先级高于组件的生命周期</h3>

  </div>
</template>

<script>

import { MixinsFn } from '@/mixins/index.js';
 
export default {
  data() {
    return {
      
    }
  },
  methods: {

  },
  mixins: [MixinsFn], // 使用混入, 会将混入对象的所有属性都合并到当前组件实例中
}
</script>

<style lang="less" scoped></style>
