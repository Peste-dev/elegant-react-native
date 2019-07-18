import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootSaga from 'store/sagas/index'
import rootReducer from 'store/reducers/index'

import middleware, { sagaMiddleware } from './middleware'

const reducer = persistReducer(
  {
    key: 'elegant', // key is required
    storage, // storage is now required
    whitelist: ['app', 'user'],
  },
  combineReducers({ ...rootReducer }),
)

/* istanbul ignore next */
const configStore = (initialState = {}) => {
  const store = createStore(reducer, initialState, compose(applyMiddleware(...middleware)))

  sagaMiddleware.run(rootSaga)

  return {
    persistor: persistStore(store),
    store,
  }
}

const { store, persistor } = configStore()

export { store, persistor }
