import {
  SET_IS_AUTHENTICATING,
  IS_AUTHENTICATED_SUCCESS,
  IS_AUTHENTICATED_FAILURE,
  REPLACE_USER_AND,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_IN_CONFIRMATION_SUCCESS,
  SIGN_IN_CONFIRMATION_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_CONFIRMATION_SUCCESS,
  SIGN_UP_CONFIRMATION_FAILURE,
  SIGN_OUT_SUCCESS
} from './types'

export default{
  SET_IS_AUTHENTICATING: (state, action) => {
    state.isAuthenticating = true,
    state.codeSent = false
    state.error = false
  },

  SET_IS_AUTHENTICATING_WITHOUT_CODESENT_EFFECT: (state) => {
    state.isAuthenticating = true
    state.error = false
  },

  IS_AUTHENTICATED_SUCCESS: (state) => {
    state.isAuthenticating = false
    state.isAuth = true
  },
  
  IS_AUTHENTICATED_FAILURE: (state, { error: { data } }) => {
    state.isAuthenticating = false
    state.isAuth = false
    state.error = data
    state.token = ''
    state.user = {}   
  },

  REPLACE_USER_AND: (state, { user }) => {
    state.user = user
  },

  SIGN_IN_SUCCESS: (state, action) => {
    state.isAuthenticating = false
    state.codeSent = true
    state.error = false
  },

  SIGN_IN_FAILURE: (state, { error: { data } }) => {
    state.isAuthenticating = false
    state.error = data
  },

  SIGN_IN_CONFIRMATION_SUCCESS: (state, { data: { user, token } }) => {
    state.isAuthenticating = false
    state.codeSent = false
    state.isAuth = true
    state.error = false
    state.token = token
    state.user = user
  },

  SIGN_IN_CONFIRMATION_FAILURE: (state, { error: { data } }) => {
    state.isAuthenticating = false
    state.error = data 
  },

  SIGN_UP_SUCCESS: (state, action) => {
    state.isAuthenticating = false
    state.codeSent = true
    state.error = false
  },

  SIGN_UP_FAILURE: (state, { error: { data } }) => {
    state.isAuthenticating = false
    state.error = data
  },

  SIGN_UP_CONFIRMATION_SUCCESS: (state, { data: { user, token } }) => {
    state.isAuthenticating = false
    state.codeSent = false
    state.isAuth = true
    state.error = false
    state.token = token
    state.user = user
  },

  SIGN_UP_CONFIRMATION_FAILURE: (state, { error: { data } }) => {
    state.isAuthenticating = false
    state.error = data 
  },

  SIGN_OUT_SUCCESS: (state, action) => {
    state.isAuthenticating = false
    state.isAuth = false
    state.error = false
    state.user = {}
    state.token = ''
  },

  CLEAR_ERRORS: (state, action) => {
    state.error = false
  },
}
