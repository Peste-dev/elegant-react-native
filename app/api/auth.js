import api from 'api'

export default {

  checkUser () {
    return new Promise(function(resolve, reject){
      api.get('check/user')
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  },

  signIn (data) {
    return new Promise(function(resolve, reject){
      api.sign('in', data)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  },

  signInConfirmation (data) {
    return new Promise(function(resolve, reject){
      api.sign('inConf', data)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  },

  signUp (data) {
    return new Promise(function(resolve, reject){
      api.sign('up', data)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  },

  signUpConfirmation (data) {
    return new Promise(function(resolve, reject){
      api.sign('upConf', data)
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  },

  signOut () {
    api.signOut()
  }
  
}
