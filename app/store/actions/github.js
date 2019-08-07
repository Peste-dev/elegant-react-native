/* eslint-disable import/prefer-default-export */
// @flow
/**
 * @module Actions/User
 * @desc User Actions
 */
import { createActions } from 'redux-actions'

import { ActionTypes } from 'store/constants/index'

export const { githubGetRepos: getRepos } = createActions({
  [ActionTypes.GITHUB_GET_REPOS]: (query) => ({ query })
});
