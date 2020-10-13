import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // actions: {
  //   changeCity (cxt, city) {
  //     cxt.commit('changeCity', city)
  //   }
  // }, // 可以省略actions这一步骤
  mutations
  // getters: { // 类似于计算属性
  //   doubleCity (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
})
