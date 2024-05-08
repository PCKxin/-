import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


// const User = resolve => { require.ensure(['@/views/User.vue'], () => { resolve(require('@/views/User.vue')) }) };

const User = resolve => require(['@/views/User.vue'], resolve);



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/about' // 路由重定向
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView 
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 中译：
    // 路由级别的代码分割
    // 这将为此路由生成一个单独的块（about.[hash].js）
    // 当访问路由时，它将被延迟加载。
    // 也就是说，当访问到这个路由时，才会加载这个组件
    component: () => import('../views/AboutView.vue')
  },
  // 创建一个路由
  {
    path: '/user',
    name: 'user', // 路由名称
    component: () => import('../views/User.vue'),
  }
]

const router = new VueRouter({
  mode: 'hash', // hash模式 有#号
  // mode: 'history', // history模式 作用是去掉url中的#号
  base: process.env.BASE_URL, // 基础路径 作用是在url中加入这个路径
  routes 
})

export default router
