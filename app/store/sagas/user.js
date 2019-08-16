/**
 * @module Sagas/User
 * @desc User
 */

import {all, delay, put, takeLatest} from 'redux-saga/effects';

import {ActionTypes} from 'store/constants/index';

/**
 * Login
 */
export function* login() {
  try {
    yield delay(400);

    yield put({
      type: ActionTypes.USER_LOGIN_SUCCESS,
    });
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      payload: err,
      type: ActionTypes.USER_LOGIN_FAILURE,
    });
  }
}

/**
 * Logout
 */
export function* logout() {
  try {
    yield delay(200);

    yield put({
      type: ActionTypes.USER_LOGOUT_SUCCESS,
    });
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      payload: err,
      type: ActionTypes.USER_LOGOUT_FAILURE,
    });
  }
}

/**
 * User Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.USER_LOGIN, login),
    takeLatest(ActionTypes.USER_LOGOUT, logout),
  ]);
}
