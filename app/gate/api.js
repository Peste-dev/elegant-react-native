import axios from 'axios'

import tokenHelper from 'helpers/token'
import config from 'helpers/config'

const client = axios.create({ baseURL: config.apiUrl, json: true })

call = (method, url, data = {}) => {  
  return new Promise((resolve, reject) => {
    tokenHelper.get().then(token => {      
      const headers = token === '' ? {} : { Authorization: `Bearer ${token}` }

      client({
        url,
        data,
        method,
        headers
      })
      .then(response => resolve(response.data))
      .catch(error => reject(error.response))
    })
  })
}

const auth = {
  signOut (url) {
    token.clear()
    call('post', url)
  }
}

export default {
  ...auth,

  get: (url, data = {}) => call('get', url, data),
  put: (url, data = {}) => call('put', url, data),  
  post: (url, data = {}) => call('post', url, data),
  patch: (url, data = {}) => call('patch', url, data),
  delete: (url, data = {}) => call('delete', url, data)
}
