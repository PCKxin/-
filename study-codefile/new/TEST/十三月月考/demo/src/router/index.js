import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/home/list" // redirect 重定向
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children:[ // 子路由 作用是在父路由的基础上再加上一层路由，用于实现页面的嵌套，也就是二级路由
      {
        path:"/home/homepage",
        component:()=>import("../components/Homepage.vue") // 懒加载
      },
      {
        path:"/home/list",
        component:()=>import("../components/List.vue")
      },
      {
        path:"/home/cart",
        component:()=>import("../components/Cart.vue")
      },
      {
        path:"/home/mine",
        component:()=>import("../components/Mine.vue")
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
