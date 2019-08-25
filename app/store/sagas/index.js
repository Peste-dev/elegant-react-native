import {all, fork} from 'redux-saga/effects';

import user from './user';
import github from './github';

export default function* root() {
  yield all([fork(user), fork(github)]);
}
