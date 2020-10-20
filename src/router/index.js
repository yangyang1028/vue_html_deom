import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
import Detali from '@/pages/detali/Detali'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City') // 异步组件
      // 当app.js非常庞大时，可以采用异步组件。
      // 异步组件 调用时会重新发送http请求
      // app.js很小时，不建议使用
    }, {
      path: '/detali/:id', // 动态路由
      name: 'Detali',
      component: Detali
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
