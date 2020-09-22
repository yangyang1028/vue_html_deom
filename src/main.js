// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决link延迟问题
import fastClick from 'fastclick'
// 样式保持同意
import './assets/styles/reset.css'
// 解决移动端1像素边框的问题
import './assets/styles/border.css'
// iconfont图标显示
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
