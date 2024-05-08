<template>
  <div class="home">
    <ul class="iconlist">
      <!--  
      active: 选中的时候的样式
    -->
      <router-link tag="li" to="/home/homepage" :class="num == 1 ? 'ilactive' : ''" class="ilItem">
        <img src="../assets/icons/homec.png">
        <p>首页</p>
      </router-link>
      <router-link tag="li" to="/home/list" :class="num == 2 ? 'ilactive' : ''" class="ilItem">
        <img src="../assets/icons/menu.png">
        <p>列表</p>
      </router-link>
      <router-link tag="li" to="/home/cart" :class="num == 3 ? 'ilactive' : ''" class="ilItem">
        <img src="../assets/icons/shop.png">
        <p>购物车</p>
      </router-link>
      <router-link tag="li" to="/home/mine" :class="num == 4 ? 'ilactive' : ''" class="ilItem">
        <img src="../assets/icons/my.png">
        <p>我的</p>
      </router-link>
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
      num: 2 // 默认选中的num值
    }
  },
  updated() {
    this.showWidth() // 页面加载完成后执行
  },
  methods: {
    showWidth() {
      switch (this.$route.path) { // 获取当前路由
        case "/home/homepage": // 判断当前路由
          this.num = 1; // 设置当前路由的num值
          break; // 结束
        case "/home/list":
          this.num = 2;
          break;
        case "/home/cart":
          this.num = 3;
          break;
        case "/home/mine":
          this.num = 4;
          break;
        default:
          this.num = 2;
          break;
      }
    }
  },
}
</script>



<style lang="less" scoped>
.iconlist {
  width: 100%;
  height: 50px;
  line-height: 20px;
  font-size: 14px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  // background: #fff;

  .ilItem {
    flex: 1;
    text-align: center;
  }

  .ilItem img {
    width: 20px;
    height: 20px;
    margin-top: 5px;
  }

  .ilactive {
    // background: skyblue;
    color: #9e9e9e;

  }
}
</style>
