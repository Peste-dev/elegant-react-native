import axios from 'axios'

import tokenHelper from 'helpers/token'
import { apiUrl } from 'helpers/config'

const client = axios.create({ baseURL: apiUrl, json: true })

const call = async (method, url, data = {}) => {  
  const token = await tokenHelper.get()
  const headers = token === '' ? {} : { Authorization: `Bearer ${token}` }

  const $request = client({ data, headers, method, url })
    .then(response => Promise.resolve(response.data))
    .catch(error => Promise.reject(error.response))
  
  return $request
}

const auth = {
  async signOut (url) {
    const token = await tokenHelper.get()
    
    token.clear()
    call('post', url)
  }
}

export default {
  ...auth,

  delete: (url, data = {}) => call('delete', url, data),
  get: (url, data = {}) => call('get', url, data),
  patch: (url, data = {}) => call('patch', url, data),
  post: (url, data = {}) => call('post', url, data),  
  put: (url, data = {}) => call('put', url, data)  
}
