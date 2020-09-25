// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决link延迟问题
import fastClick from 'fastclick'
// 样式保持统一
import './assets/styles/reset.css'
// 解决移动端1像素边框的问题
import './assets/styles/border.css'
// iconfont图标显示
import './assets/styles/iconfont.css'
// 引入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'
// import style (<= Swiper 5.x)
// import 'swiper/css/swiper.css'
// 引入swiper轮播插件
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
