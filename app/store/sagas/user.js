import {all, delay, put, takeLatest} from 'redux-saga/effects';

import {login, loginSuccess, logout, logoutSuccess} from 'store/reducers/user';

function* loginSaga() {
  yield delay(400);
  yield put({type: loginSuccess.type});
}

function* logoutSaga() {
  yield delay(200);
  yield put({type: logoutSuccess.type});
}

export default function* root() {
  yield all([
    takeLatest(login.type, loginSaga),
    takeLatest(logout.type, logoutSaga),
  ]);
}
