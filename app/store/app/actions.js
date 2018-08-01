import {
  LOAD_APP,
  UNLOAD_APP
} from './types'

export default{
  loadApp: isAuthenticated  => ({ type : LOAD_APP, isAuthenticated }),
  unloadApp : isAuthenticated => ({ type : UNLOAD_APP, isAuthenticated })
}
