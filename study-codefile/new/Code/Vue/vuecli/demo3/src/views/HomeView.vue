<template>
  <div class="home">
    <ul>
      <!--  
      active: 选中的时候的样式
    -->
      <router-link tag="li" to="/home/category" :class="num == 1 ? 'active' : ''">分类</router-link>
      <router-link tag="li" to="/home/surprise" :class="num == 2 ? 'active' : ''">惊喜</router-link>
      <router-link tag="li" to="/home/cart" :class="num == 3 ? 'active' : ''">购物车</router-link>
    </ul>

    <!-- 显示切换不同的组件 -->
    <!--  
    router-view: 显示不同的组件
   -->
    <router-view />


  </div>



</template>

<script>
// @ is an alias to /src
// import cart from '@/components/Category.vue'


export default {
  name: 'HomeView',
  components: {
    // cart
  },
  data() {
    return {
      num: 1
    }
  },
  updated() {
    this.showWidth() // 页面加载完成后执行
  },
  methods: {
    showWidth() {
      switch (this.$route.path) { // 获取当前路由
        case "/home/category": // 判断当前路由
          this.num = 1; // 设置当前路由的num值
          break; // 结束
        case "/home/surprise":
          this.num = 2;
          break;
        case "/home/cart":
          this.num = 3;
          break;
        default:
          this.num = 1
          break;
      }
    }
  },
}
</script>



<style lang="less" scoped>
ul {
  width: 100%;
  height: 50px;
  line-height: 50px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  background: #fff;

  li {
    flex: 1;
    text-align: center;
  }

  .active {
    background: skyblue;
    color: #fff;

  }
}
</style>
