import axios from 'axios'
import { baseUrl, apiUrl } from 'helpers/config'
import token from 'helpers/token'

// import store from "store/index" // points to store/index.js file
// const accessTokenn = store.getState().auth.accessToken;

const client = axios.create({
  baseURL: apiUrl,
  json: true
})

const auth = {

  async sign (type, data) {
    let url = ''

    switch (type) {
      case 'in':
        url = 'login/send-code'
        break
      case 'inConf':
        url = 'login'
        break
      case 'up':
        url = 'create/register'
        break
      default:
        break;
    }

    return new Promise((resolve, reject) => {
      client({
        method: 'post',
        url,
        data
      }).then(response => {   
        resolve(response.data)
      }).catch(error => {
        reject(error.response)
      })
    })
  },

  signOut (data) {
    token.clear()
  }

}

const Api = {

  ...auth,

  async call (method, resource, data) {
    return new Promise((resolve, reject) => {
      token.get().then(sessionToken => {
        const accessToken = sessionToken

        client({
          method,
          url: resource,
          data,
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }).then(response => {   
          resolve(response.data)
        }).catch(error => {
          reject(error.response)
        })
      })
    })
  },

  async get (resource, data) {
    return new Promise((resolve, reject) => {
      this.call('get', resource, data)
      .then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  async post (resource, data) {
    return new Promise((resolve, reject) => {
      this.call('post', resource, data)
      .then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  async put (resource, data) {
    return new Promise((resolve, reject) => {
      this.call('put', resource, data)
      .then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default Api
