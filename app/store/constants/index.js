import keyMirror from 'fbjs/lib/keyMirror'

/**
 * @namespace Constants
 * @desc App constants
 */

/**
 * @constant {Object} ActionTypes
 * @memberof Constants
 */
export const ActionTypes = keyMirror({
  EXCEPTION: undefined,
  GITHUB_GET_REPOS: undefined,
  GITHUB_GET_REPOS_FAILURE: undefined,
  GITHUB_GET_REPOS_SUCCESS: undefined,
  HIDE_ALERT: undefined,
  SHOW_ALERT: undefined,
  SWITCH_MENU: undefined,
  USER_LOGIN: undefined,
  USER_LOGIN_FAILURE: undefined,
  USER_LOGIN_SUCCESS: undefined,
  USER_LOGOUT: undefined,
  USER_LOGOUT_FAILURE: undefined,
  USER_LOGOUT_SUCCESS: undefined,
})

/**
 * @constant {Object} STATUS
 * @memberof Constants
 */
export const STATUS = {
  ERROR: 'error',
  IDLE: 'idle',
  READY: 'ready',
  RUNNING: 'running',
  SUCCESS: 'success',
}
