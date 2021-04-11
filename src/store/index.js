import Vue from 'vue'
import Vuex from 'vuex'
import ProfileRepository from '../application/repository/profileRepository'
const profileRepository = new ProfileRepository()

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
    },
    getProfiles: async ({ commit, state }, payload) => {
      return new Promise((resolve, reject) => {
        profileRepository.getProfiles().then((res) => {
          resolve(res)
        }).catch(() => {
          reject(new Error('Error al obtener el perfil'))
        })
      })
    }
  },
  modules: {
  }
})
