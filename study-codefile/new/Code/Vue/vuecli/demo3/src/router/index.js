import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/home/category" // redirect 重定向
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children:[ // 子路由 作用是在父路由的基础上再加上一层路由，用于实现页面的嵌套，也就是二级路由
      {
        path:"/home/category",
        component:()=>import("../components/Category.vue") // 懒加载
      },
      {
        path:"/home/surprise",
        component:()=>import("../components/Surprise.vue")
      },
      {
        path:"/home/cart",
        component:()=>import("../components/Cart.vue")
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/UserView.vue'),
    // 独享守卫
    // beforeEnter:(to, from, next) => {
    //   console.log("独享守卫")
    //   if(to.path == '/user'){
    //     if(from.path == '/about'){
    //       next()
    //     }else{
    //       console.log("path不是/about，不能进入/user")
    //       next('about')
    //     }
    //   }else{
    //     next()
    //   }
    // }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局前置守卫 作用是在路由跳转之前进行拦截，进行一些操作，比如判断是否登录，是否有权限等
// 参数
// to : 即将要进入的目标 路由对象
// from : 当前导航正要离开的路由
// next Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

// router.beforeEach((to, from, next) => {
//   console.log("全局前置守卫")
//   next()
// })
// router.beforeEach((to, from, next) => {
//   if(to.path == '/user'){
//     if(from.path == '/about'){
//       next()
//     }else{
//       console.log("path不是/about，不能进入/user")
//       next('about')
//     }
//   }else{
//     next()
//   }
// })

// 全局解析守卫 作用是 在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫被调用
// router.beforeResolve((to, from, next) => {

//   // console.log("全局解析守卫")
//   // next()
// })

// 全局后置守卫 作用是 在导航被确认之后调用
router.afterEach((to, from) => {
  // console.log("全局后置钩子")
  console.log(to)
  console.log(from)

})


export default router
