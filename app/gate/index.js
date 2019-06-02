import api from './api'

const methods = {
  delete: (url, data = {}) => api.delete(url, data),
  get: (url, data = {}) => api.get(url, data),
  patch: (url, data = {}) => api.patch(url, data),
  post: (url, data = {}) => api.post(url, data),
  put: (url, data = {}) => api.put(url, data)
}

const auth = {
  checkMe: () => api.get('check/me'),
  checkUser: () => api.get('check/user'),
  checkVer: () => api.get('check/ver'),

  signIn: data => api.post('sign-in', data),
  signInConfirmation: data => api.post('sign-in-confirmation', data),

  signOut: () => api.signOut('sign-out'),
  
  signUp: data => api.post('sign-up', data), 
  signUpConfirmation: data => api.post('sign-up-confirmation', data)
}


export default {
  home: () => api.get('todos'),
  // any: someId => api.get(`/any/${someId}`),
  // any: data => api.post('/any', data),

  ...methods,
  ...auth
}
