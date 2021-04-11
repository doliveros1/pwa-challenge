import ApiData from '../data/api'
import Profile from './Profile'

const apiData = new ApiData()

export default class ProfileRepository {
  getProfiles (email, password) {
    return (async (resolve, reject) => {
      const res = await apiData.getProfiles()
      return toDomain(res.data.results)
    })()
  }

  getFavorites (nickname) {
    return (async (resolve, reject) => {
      const res = await apiData.getFavorites(nickname)
      return toDomain(res.data)
    })()
  }

  addFavorite (nickname, profile) {
    return (async (resolve, reject) => {
      const res = await apiData.getFavorites(nickname)
      // TODO: Check if exists
      res.data.push(profile)
      await apiData.setFavorites(nickname, res.data)
      return {}
    })()
  }

  deleteFavorite (nickname, id) {
    return (async (resolve, reject) => {
      const res = await apiData.getFavorites(nickname)
      const favorites = filterDeleted(res.data, id)
      await apiData.setFavorites(nickname, favorites)
      return toDomain(favorites)
    })()
  }
}

function toDomain (results) {
  const profiles = []
  results.forEach(result => {
    const profile = new Profile()
    profile.id = result.login.uuid
    profile.name = result.name.title + ' ' + result.name.first + ' ' + result.name.last
    profile.email = result.email
    profile.gender = result.gender
    profile.nat = result.nat
    profile.age = result.dob.age
    profile.dob = result.dob.date
    profile.dob = result.dob.date
    profile.dor = result.registered.date
    profile.wrapper = result
    profiles.push(profile)
  })
  return profiles
}

function filterDeleted (results, id) {
  const profiles = []
  results.forEach(result => {
    if (result.login.uuid !== id) {
      profiles.push(result)
    }
  })
  return profiles
}
