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
}

function toDomain (results) {
  const profiles = []
  results.forEach(result => {
    const profile = new Profile()
    profile.id = result.id.value
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
