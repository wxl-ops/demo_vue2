import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routerTips: '官网首页-双边会谈'
  },
  mutations: {
    changeTips(state, val) {
      state.routerTips = val
    }
  },
  actions: {}
})
