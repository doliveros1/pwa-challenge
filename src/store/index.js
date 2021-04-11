import Vue from 'vue'
import Vuex from 'vuex'
import ProfileRepository from '../application/repository/profileRepository'
const profileRepository = new ProfileRepository()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nickname: '',
    currentProfile: {}
  },
  mutations: {
    HOME_NICKNAME: (state, payload) => {
      state.nickname = payload
    },
    CURRENT_PROFILE: (state, payload) => {
      state.currentProfile = payload
    }
  },
  actions: {
    setNickName: ({ commit }, payload) => {
      commit('HOME_NICKNAME', payload)
    },
    setCurrentProfile: ({ commit }, payload) => {
      commit('CURRENT_PROFILE', payload)
    },
    getCurrentProfile: ({ commit, state }, payload) => {
      return state.currentProfile
    },
    getProfiles: async ({ commit, state }, payload) => {
      return new Promise((resolve, reject) => {
        profileRepository.getProfiles().then((res) => {
          resolve(res)
        }).catch(() => {
          reject(new Error('Error al obtener os perfiles'))
        })
      })
    },
    addFavorite: async ({ commit, state }, payload) => {
      return new Promise((resolve, reject) => {
        profileRepository.addFavorite(state.nickname, payload).then((res) => {
          resolve(res)
        }).catch(() => {
          reject(new Error('Error al añadir favorito'))
        })
      })
    },
    getFavorites: async ({ commit, state }, payload) => {
      return new Promise((resolve, reject) => {
        profileRepository.getFavorites(state.nickname).then((res) => {
          resolve(res)
        }).catch(() => {
          reject(new Error('Error al añadir favorito'))
        })
      })
    },
    deleteFavorites: async ({ commit, state }, payload) => {
      return new Promise((resolve, reject) => {
        profileRepository.deleteFavorite(state.nickname, payload).then((res) => {
          resolve(res)
        }).catch((error) => {
          reject(error)
        })
      })
    }
  },
  modules: {
  }
})
