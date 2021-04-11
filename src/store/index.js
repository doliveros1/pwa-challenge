import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nickname: ''
  },
  mutations: {
    HOME_NICKNAME: (state, payload) => {
      state.nickname = payload
    }
  },
  actions: {
    setNickName: ({ commit }, payload) => {
      commit('HOME_NICKNAME', payload)
    }
  },
  modules: {
  }
})
