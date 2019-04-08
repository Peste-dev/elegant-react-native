import api from './api'

const methods = {
  get: (url, data = {}) => api.get(url, data),  
  put: (url, data = {}) => api.put(url, data),
  post: (url, data = {}) => api.post(url, data),
  patch: (url, data = {}) => api.patch(url, data),
  delete: (url, data = {}) => api.delete(url, data)
}

const auth = {
  signOut: () => api.signOut('sign-out'),
  checkMe: () => api.get('check/me'),
  checkUser: () => api.get('check/user'),
  checkVer: () => api.get('check/ver'),

  signIn: data => api.post('sign-in', data),
  signUp: data => api.post('sign-up', data),  

  signInConfirmation: data => api.post('sign-in-confirmation', data),
  signUpConfirmation: data => api.post('sign-up-confirmation', data)
}


export default {
  home: () => api.get('todos'),
  // any: someId => api.get(`/any/${someId}`),
  // any: data => api.post('/any', data),

  ...methods,
  ...auth
}
