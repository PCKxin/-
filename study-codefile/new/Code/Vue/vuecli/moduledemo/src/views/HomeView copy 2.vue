<template>
  <div class="home">
    <button @click="btnClick">切换显示</button>
    <!--  
      transition: 过渡动画
      包裹需要过渡的元素
      name: 过渡的类名
      默认类名 v-enter v-enter-active v-enter-to
    -->
    <transition name="fade">
      <h3 v-show="flag"></h3>
    </transition>
  </div>
</template>

<script>



export default {
  name: 'HomeView',  
  data() {
    return {
      flag: false
    }
  },
  methods: {
    btnClick() {
      this.flag = !this.flag
    }
  },


}
</script>

<!--  
  scoped: 作用域样式 只在当前组件生效
-->
<style lang="less" scoped>
  .home {
    h3 {
      width: 300px;
      height: 300px;
      background: skyblue;
    }
    // .v-enter,.v-leave-to{ // 进入之前 离开之后
    //   opacity: 0;
    // }
    // .v-enter-active,.v-leave-active{ // 进入中
    //   transition: opacity 3s;
    // }
    // .v-enter-to,.v-leave{ // 进入之后 v-leave是离开之前
    //   opacity: 1;
    // }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity 1s;
    }

    .fade-enter-to, .fade-leave {
      opacity: 1;
    }
  }
</style>