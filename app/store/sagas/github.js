/**
 * @module Sagas/GitHub
 * @desc GitHub
 */

import {all, call, put, takeLatest} from 'redux-saga/effects';

import gate from 'gate';
import {ActionTypes} from 'store/constants/index';

/**
 * Get Repos
 *
 * @param {Object} action
 *
 */
export function* getRepos({payload}) {
  try {
    const response = yield call(gate.getRepositories, payload.query);

    yield put({
      payload: {data: response.items},
      type: ActionTypes.GITHUB_GET_REPOS_SUCCESS,
    });
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      payload: err,
      type: ActionTypes.GITHUB_GET_REPOS_FAILURE,
    });
  }
}

/**
 * GitHub Sagas
 */
export default function* root() {
  yield all([takeLatest(ActionTypes.GITHUB_GET_REPOS, getRepos)]);
}
