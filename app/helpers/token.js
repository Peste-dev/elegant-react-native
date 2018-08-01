import { AsyncStorage } from 'react-native'

class token {

  constructor () {
    this._accessToken = null
  }

  get() {
    return new Promise((resolve, reject) => {
      if (this._accessToken) return resolve(this._accessToken)

      AsyncStorage.getItem('ACCESS_TOKEN')
        .then((token) => {
          if (token) {
            resolve(token)
          } else {
            resolve('')
          }
        })
    })
  }

  set(token) {
    this._accessToken = token
    return AsyncStorage.setItem('ACCESS_TOKEN', token)
  }

  clear() {
    this._accessToken = null
    return AsyncStorage.removeItem('ACCESS_TOKEN')
  }
}

export default new token()
