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
  clearErrors: () => ({ type: CLEAR_ERRORS }),
  isAuthenticated: () => ({ type: IS_AUTHENTICATED }),
  signIn: data => ({ data, type: SIGN_IN }),
  signInConfirmation: data => ({ data, type: SIGN_IN_CONFIRMATION }),  
  signOut: () => ({ type: SIGN_OUT }),
  signUp: data => ({ data, type: SIGN_UP }),
  signUpConfirmation: data => ({ data, type: SIGN_UP_CONFIRMATION })
}
