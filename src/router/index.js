// 在创建规则数组的时候,要把用到的组件导入进来
import Login from '../views/Login'

// vue-router的使用步骤
// 1. 下包
// 2. 导入
import VueRouter from 'vue-router'
import Vue from 'vue'
// 3. 注册 Vue.use(VueRouter)
Vue.use(VueRouter)
// 4.创建规则数组
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  }
]

// 5.根据创建好的路由规则,生成路由对象

const router = new VueRouter({
  routes
})

export default router

// 6. 在new Vue()中注入路由对象 ,,,,,在main.js中

// 7.给定一个挂载点 (出口) -> app.vue   <router-view/>
// 一级路由出口  在App.vue中
