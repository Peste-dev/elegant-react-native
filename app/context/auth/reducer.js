import {
  SET_IS_AUTHENTICATING,
  SET_IS_AUTHENTICATING_WITHOUT_CODESENT_EFFECT,
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
  SIGN_OUT_SUCCESS,
  CLEAR_ERRORS,
} from './types'

function authReducer(state, action) {
  switch (action.type) {
    case SET_IS_AUTHENTICATING:
      return {
        ...state,
        codeSent: false,
        error: false,
        isAuthenticating: true
      }
    case SET_IS_AUTHENTICATING_WITHOUT_CODESENT_EFFECT:
      return {
        ...state,
        error: false,
        isAuthenticating: true
      }
    case IS_AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isAuthenticating: false        
      }
    case IS_AUTHENTICATED_FAILURE:
      return {
        ...state,
        error: action.error.data,
        isAuth: false,
        isAuthenticating: false,
        token: '',
        user: {}
      }
    case REPLACE_USER_AND:
      return {
        ...state,
        user: action.user
      }
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        codeSent: true,
        error: false,
        isAuthenticating: false        
      }
    case SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.error.data,
        isAuthenticating: false        
      }
    case SIGN_IN_CONFIRMATION_SUCCESS:
      return {
        ...state,
        codeSent: false,
        error: false,
        isAuth: true,
        isAuthenticating: false,
        token: action.data.token,
        user: action.data.user,
      }
    case SIGN_IN_CONFIRMATION_FAILURE:
      return {
        ...state,
        error: action.error.data,
        isAuthenticating: false
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        codeSent: true,
        error: false,
        isAuthenticating: false
      }
    case SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.error.data,
        isAuthenticating: false
      }
    case SIGN_UP_CONFIRMATION_SUCCESS:
      return {
        ...state,
        codeSent: false,
        error: false,
        isAuth: true,
        isAuthenticating: false,
        token: action.data.token,
        user: action.data.user,
      }
    case SIGN_UP_CONFIRMATION_FAILURE:
      return {
        ...state,
        error: action.error.data,
        isAuthenticating: false        
      }
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        error: false,
        isAuth: false,
        isAuthenticating: false,
        token: '',
        user: {},
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: false,
      }
    default:
      return state
  }
}

export default authReducer
