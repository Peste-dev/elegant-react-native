import {createContainer} from 'redux-box'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import sagas from './sagas'

export const module = {
  name : 'auth',
  state, 
  actions, 
  mutations, 
  sagas
}

export default createContainer(module)
