const axios = require('axios')

const URL_PROFILES = 'https://randomuser.me/api/?results=100'

export default class ApiData {
  async getProfiles () {
    return axios.get(URL_PROFILES)
  }
}
