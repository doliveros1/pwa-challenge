const axios = require('axios')

const URL_PROFILES = 'https://randomuser.me/api/?results=100'
// const URL_FAVORITES = 'https://microservice-challenge.herokuapp.com'
const URL_FAVORITES = ''

export default class ApiData {
  async getProfiles () {
    return axios.get(URL_PROFILES)
  }

  async getFavorites (nickname) {
    return axios.get(URL_FAVORITES + '/favorites/' + nickname)
  }

  async setFavorites (nickname, favorites) {
    const data = JSON.stringify(favorites)
    return axios.post(URL_FAVORITES + '/favorites/' + nickname, data, {
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      }
    })
  }
}
