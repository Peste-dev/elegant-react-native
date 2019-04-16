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
        isAuthenticating: true,
        codeSent: false,
        error: false,
      }
    case SET_IS_AUTHENTICATING_WITHOUT_CODESENT_EFFECT:
      return {
        ...state,
        isAuthenticating: true,
        error: false,
      }
    case IS_AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        isAuth: true,
      }
    case IS_AUTHENTICATED_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        isAuth: false,
        error: action.error.data,
        token: '',
        user: {},
      }
    case REPLACE_USER_AND:
      return {
        ...state,

        user: action.user,
      }
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        codeSent: true,
        error: false,
      }
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        error: action.error.data,
      }
    case SIGN_IN_CONFIRMATION_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        codeSent: false,
        isAuth: true,
        error: false,
        token: action.data.token,
        user: action.data.user,
      }
    case SIGN_IN_CONFIRMATION_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        error: action.error.data,
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        codeSent: true,
        error: false,
      }
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        error: action.error.data,
      }
    case SIGN_UP_CONFIRMATION_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        codeSent: false,
        isAuth: true,
        error: false,
        token: action.data.token,
        user: action.data.user,
      }
    case SIGN_UP_CONFIRMATION_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        error: action.error.data,
      }
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        isAuth: false,
        error: false,
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
