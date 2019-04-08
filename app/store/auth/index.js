import {createContainer} from 'redux-box'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import sagas from './sagas'
import selectors from './selectors'

export const module = {
  name : 'auth',
  state,
  sagas,
  actions, 
  mutations, 
  selectors
}

export default createContainer(module)
