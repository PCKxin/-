<template>
  <div class="home">
    <h2>NextTick方法作用是什么</h2>
    <p>nextTick 方法接受一个回调函数作为参数。这个回调函数会在 DOM 更新之后被调用</p>
    <h2 ref="title">{{ num }}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>



export default {
  name: 'HomeView',  
  data() {
    return {
      num: 0
    }
  },
  methods: {
    btnClick() {
      this.num++;
      console.log(this.$refs.title);
      // console.log(this.$refs.title.innerText);

      // Callback 形式
      // nextTick 方法接受一个回调函数作为参数。这个回调函数会在 DOM 更新之后被调用
      this.$nextTick(() => { // 会在下次 DOM 更新循环结束之后执行延迟回调
        console.log("DOM 更新 Callback形式NextTick ");
        console.log(this.$refs.title.innerText);
      });
      // Promise 形式  
      this.$nextTick().then(() => {
        console.log("DOM 更新 Promise形式NextTick");
        console.log(this.$refs.title.innerText);
      });
      
    }
  },
  // 深度监听
  watch: {
    num: {
      handler() {
        console.log("num 发生变化");
        // consoel.log(this.num);
      },
      deep: true
    }
  }


}
</script>

<style lang="less" scoped></style>