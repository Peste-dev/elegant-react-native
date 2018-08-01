import {createContainer} from 'redux-box'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import sagas from './sagas'

export const module = {
  name : 'app',
  state, 
  actions, 
  mutations,
  sagas
}

//OPTIONAL: if you want to access this store using render props:
export default createContainer(module)
