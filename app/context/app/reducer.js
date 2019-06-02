import { LOAD_APP, UNLOAD_APP } from './types'

const appReducer = (state, action) => {
  switch (action.type) {
    case LOAD_APP:
      return {
        ...state,
        isAuthenticated: true,
      }
    case UNLOAD_APP:
      return {
        ...state,
        isAuthenticated: false,
      }
    default:
      return state
  }
}

export default appReducer
