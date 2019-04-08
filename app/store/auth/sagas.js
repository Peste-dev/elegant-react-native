import { 
  SET_IS_AUTHENTICATING,
  SET_IS_AUTHENTICATING_WITHOUT_CODESENT_EFFECT,
  IS_AUTHENTICATED,
  IS_AUTHENTICATED_SUCCESS,
  IS_AUTHENTICATED_FAILURE,
  REPLACE_USER,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_CONFIRMATION,
  SIGN_UP_CONFIRMATION_SUCCESS,
  SIGN_UP_CONFIRMATION_FAILURE,
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
import { call, put, select } from 'redux-saga/effects'

import gate from 'gate'
import token from 'helpers/token'

import { getUser } from './selectors'

export default createSagas({

  IS_AUTHENTICATED: function* () {    
    try {
      yield put({ type: SET_IS_AUTHENTICATING })
      const data = yield call(gate.checkUser)
      
      if (data.error) {
        yield put({ type: IS_AUTHENTICATED_FAILURE, error: data.error})
      } else {
        yield put({ type: IS_AUTHENTICATED_SUCCESS, data })

        const user = yield select(getUser)

        if (user.updated_at !== data.updated_at) {
          const me = yield call(gate.checkMe)

          yield put({ type: REPLACE_USER_AND, user: me.user })
        }        
      }      
    } catch (error) {
      yield put({ type: IS_AUTHENTICATED_FAILURE, error })
    }
  },

  SIGN_IN: function* (action) {
    try {
      yield put({ type: SET_IS_AUTHENTICATING })
      yield call(gate.signIn, action.data)

      yield put({ type: SIGN_IN_SUCCESS })
    } catch (error) {
      yield put({ type: SIGN_IN_FAILURE, error })
    }    
  },

  SIGN_IN_CONFIRMATION: function* (action) {
    try {
      yield put({ type: SET_IS_AUTHENTICATING_WITHOUT_CODESENT_EFFECT })
      const data = yield call(gate.signInConfirmation, action.data)

      token.set(data.token)
      yield put({ type: SIGN_IN_CONFIRMATION_SUCCESS, data })
    } catch (error) {
      yield put({ type: SIGN_IN_CONFIRMATION_FAILURE, error })
    }
  },

  SIGN_UP: function* (action) {
    try {
      yield put({ type: SET_IS_AUTHENTICATING })
      yield call(gate.signUp, action.data)

      yield put({ type: SIGN_UP_SUCCESS })
    } catch (error) {
      yield put({ type: SIGN_UP_FAILURE, error })
    }    
  },

  SIGN_UP_CONFIRMATION: function* (action) {
    try {
      yield put({ type: SET_IS_AUTHENTICATING_WITHOUT_CODESENT_EFFECT })
      const data = yield call(gate.signUpConfirmation, action.data)

      token.set(data.token)
      yield put({ type: SIGN_UP_CONFIRMATION_SUCCESS, data })
    } catch (error) {
      yield put({ type: SIGN_UP_CONFIRMATION_FAILURE, error })
    }
  },

  SIGN_OUT: function* () {
    yield call(gate.signOut)

    yield put({ type: SIGN_OUT_SUCCESS })
  }

})
