import { 
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP_CONFIRMATION,
  IS_AUTHENTICATED,
  IS_NOT_AUTHENTICATED,
  SIGN_IN_CONFIRMATION
} from "./types"

export default {
  isAuthenticated: () => ({ type : IS_AUTHENTICATED }),
  SignUp : data  => ({ type : SIGN_UP, data }),
  SignUpConfirmation : data  => ({ type : SIGN_UP_CONFIRMATION, data }),
  signIn: data => ({ type : SIGN_IN, data }),
  signInConfirmation: data => ({ type : SIGN_IN_CONFIRMATION, data }),
  signOut: () => ({ type : SIGN_OUT })
}
