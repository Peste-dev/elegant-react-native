import {
  LOAD_APP,
  UNLOAD_APP
} from './types'

export default {
  LOAD_APP  : (state, action) => state.isAuthenticated  = true,
  UNLOAD_APP : (state, action) => state.isAuthenticated = false
}
