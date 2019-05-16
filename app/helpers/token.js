import AsyncStorage from '@react-native-community/async-storage';

class Token {

  constructor () {
    this._accessToken = null
  }

  async get() {
    if (this._accessToken) return Promise.resolve(this._accessToken)

    const accessToken = await AsyncStorage.getItem('ACCESS_TOKEN')

    return accessToken || ''
  }

  set(accessToken) {
    this._accessToken = accessToken
    return AsyncStorage.setItem('ACCESS_TOKEN', accessToken)
  }

  clear() {
    this._accessToken = null
    return AsyncStorage.removeItem('ACCESS_TOKEN')
  }
}

export default new Token()
