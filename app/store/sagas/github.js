import {all, call, put, takeLatest} from 'redux-saga/effects';

import gate from 'gate';
import i18n from 'i18n';

import {
  getRepos,
  getReposSuccess,
  getReposFailure,
} from 'store/reducers/github';

const {githubLang} = i18n;

function* getReposSaga({payload}) {
  try {
    const response = yield call(gate.getRepositories, payload.query);

    yield put({payload: {data: response.items}, type: getReposSuccess.type});
  } catch (err) {
    let text = githubLang.requestError;

    if (err?.data?.message) {
      text = err.data.message;
    }

    yield put({payload: {text}, type: getReposFailure.type});
  }
}

export default function* root() {
  yield all([takeLatest(getRepos.type, getReposSaga)]);
}
