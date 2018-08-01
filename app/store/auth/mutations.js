import {
  SET_IS_AUTHENTICATING,
  IS_AUTHENTICATED_SUCCESS,
  IS_AUTHENTICATED_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_IN_CONFIRMATION_SUCCESS,
  SIGN_IN_CONFIRMATION_FAILURE,
  SIGN_OUT_SUCCESS
} from './types'

export default{
  SET_IS_AUTHENTICATING: (state, action) => state.isAuthenticating = true,

  IS_AUTHENTICATED_SUCCESS: (state, action) => {
    state.isAuthenticating = false,
    state.isAuth = true
  },
  
  IS_AUTHENTICATED_FAILURE: (state, action) => {
    state.isAuthenticating = false,
    state.isAuth = false,
    state.user = {},
    state.token = ''
  },

  SIGN_IN_SUCCESS: (state, action) => {
    state.isAuthenticating = false,
    state.codeSent = true
  },

  SIGN_IN_FAILURE: (state, { error }) => {
    state.isAuthenticating = false,
    state.isAuth = false,
    state.codeSent = false,
    state.user = {},
    state.token = '',
    state.error = error.data
  },

  SIGN_IN_CONFIRMATION_SUCCESS: (state, { data: { user, token } }) => {
    state.isAuthenticating = false,
    state.isAuth = true,
    state.codeSent = false,
    state.user = user,
    state.token = token,
    state.error = false
  },

  SIGN_IN_CONFIRMATION_FAILURE: (state, { error }) => {
    state.isAuthenticating = false,
    state.isAuth = false,
    state.codeSent = false,
    state.user = {},
    state.token = '',
    state.error = error.data
  },

  SIGN_OUT_SUCCESS: (state, action) => {
    state.isAuthenticating = false,
    state.isAuth = false,
    state.user = {},
    state.token = '',
    state.error = false
  }
}
