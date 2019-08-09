import { all, fork } from 'redux-saga/effects'
import { networkSaga } from 'react-native-offline'
import github from './github'
import user from './user'

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(github), fork(user), fork(networkSaga, { pingInterval: 20000 })])
}
