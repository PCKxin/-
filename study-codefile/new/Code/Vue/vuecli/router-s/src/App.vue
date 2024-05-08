<template>
  <div id="app">
    <nav>
      <!--  
        to 作用是指定跳转的路径
        tag 作用是指定渲染的标签
      -->
      <!-- <router-link to="/" tag="li">Home</router-link> |
      <router-link to="/about" >About</router-link> |
      <router-link to="/user">User</router-link> -->
    </nav>
    <ul>
      <li @click="indexclick">\</li>
      <li @click="homeclick">Home</li>
      <li @click="aboutclick">About</li>
      <li @click="userclick">User</li>
    </ul>
    <button @click="forwardFn">向前</button>
    <button @click="backFn">向后</button>
    <router-view/>
  </div>
</template>

<script>
  export default{
    methods:{
      indexclick(){
        this.$router.push('/', () =>{})
      },
      homeclick(){
        this.$router.push(
          {
            name:'home', // 命名路由
            params: { // 传递参数
              id: 123,
            },
          },
            () =>{}) // ()=>{} 放进去作用是 为了解决连点报错
      },
      aboutclick(){
        this.$router.push('/about', () =>{})
      },
      userclick(){
        // 简写
        // this.$router.push('/user', () =>{})
        // 完整写法
        // this.$router.push({path: '/user'}, () =>{})
        // 命名路由，
        // this.$router.push({name: 'user'}, () =>{})
        // query 传参 与 params 传参的区别是 query 传参是在 url 上显示的，params 传参是在 url 上不显示的
        this.$router.push(
          {
            name: 'user', 
            query: {id: 111}
          }, 
          () =>{}
        )
      },
      forwardFn(){
        // this.$router.go(1) // .go( ) 里面的参数是正数，向前跳转，负数向后跳转
        this.$router.forward() // .forward() 也是向前跳转
      },
      backFn(){
        this.$router.back() // .back() 是向后跳转
      }
    }
    /*
    
    params与query的区别
    1. 基于path的跳转，只能用query携带参数，params无效
    2. 基于name的跳转，params和query都不可以携带参数
    
    
    
    */ 
  }




</script>





<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
