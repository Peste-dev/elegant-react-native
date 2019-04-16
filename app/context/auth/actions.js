import {
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  CLEAR_ERRORS,
  SIGN_UP_CONFIRMATION,
  IS_AUTHENTICATED,
  SIGN_IN_CONFIRMATION,
} from './types'

export default {
  isAuthenticated: () => ({ type: IS_AUTHENTICATED }),
  signUp: data => ({ type: SIGN_UP, data }),
  signUpConfirmation: data => ({ type: SIGN_UP_CONFIRMATION, data }),
  signIn: data => ({ type: SIGN_IN, data }),
  signInConfirmation: data => ({ type: SIGN_IN_CONFIRMATION, data }),
  signOut: () => ({ type: SIGN_OUT }),
  clearErrors: () => ({ type: CLEAR_ERRORS }),
}
