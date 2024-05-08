import Vue, { KeepAlive } from 'vue' 
// KeepAlive是vue的内置组件，用于缓存组件，避免重复渲染导致的性能问题
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta:{
      KeepAlive:true, // 缓存开启，缓存的组件需要在组件内部设置name属性
    }
  },
  {
    path: '/test', // 测试页面
    name: 'test',
    component: () => import(/* webpackChunkName: "about" */ '../views/test.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL, // BASE_URL是vue-cli3中的一个环墋变量，用于指定项目的基本路径
  routes
})

export default router
