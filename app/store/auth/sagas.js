import { 
  SET_IS_AUTHENTICATING,
  IS_AUTHENTICATED,
  IS_AUTHENTICATED_SUCCESS,
  IS_AUTHENTICATED_FAILURE,
  SIGN_UP,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_IN_CONFIRMATION,
  SIGN_IN_CONFIRMATION_SUCCESS,
  SIGN_IN_CONFIRMATION_FAILURE,
  SIGN_OUT,
  SIGN_OUT_SUCCESS
} from "./types"

import { createSagas } from 'redux-box'
import { call, put } from 'redux-saga/effects'

import authApi from 'api/auth'
import token from 'helpers/token'

export default createSagas({

  IS_AUTHENTICATED: function* () {    
    try {
      yield put({ type: SET_IS_AUTHENTICATING })
      const data = yield call(authApi.checkUser)
      yield put({ type: IS_AUTHENTICATED_SUCCESS, data })
    } catch (error) {
      yield put({ type: IS_AUTHENTICATED_FAILURE })
    }
  },

  SIGN_IN: function* (action) {
    try {
      yield put({ type: SET_IS_AUTHENTICATING })
      yield call(authApi.signIn, action.data)

      yield put({ type: SIGN_IN_SUCCESS })
    } catch (error) {
      yield put({ type: SIGN_IN_FAILURE, error })
    }    
  },

  SIGN_IN_CONFIRMATION: function* (action) {
    try {
      yield put({ type: SET_IS_AUTHENTICATING })
      const data = yield call(authApi.signInConfirmation, action.data)

      token.set(data.token)
      yield put({ type: SIGN_IN_CONFIRMATION_SUCCESS, data })
    } catch (error) {
      yield put({ type: SIGN_IN_CONFIRMATION_FAILURE, error })
    }
  },

  SIGN_OUT: function* () {
    yield call(authApi.signOut)

    yield put({ type: SIGN_OUT_SUCCESS })
  }

})
