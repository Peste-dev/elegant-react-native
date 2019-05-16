import { LOAD_APP, UNLOAD_APP } from './types'

export default {
  loadApp: isAuthenticated => ({ isAuthenticated, type: LOAD_APP }),
  unloadApp: isAuthenticated => ({ isAuthenticated, type: UNLOAD_APP }),
}
