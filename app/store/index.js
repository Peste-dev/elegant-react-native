import logger from 'redux-logger'
import { createStore } from 'redux-box'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

import { module as appModule } from 'store/app'
import { module as authModule } from 'store/auth'

import apiMiddleware from 'store/middlewares/api'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'] //blacklist or whitelist any module by it's name
}

const modules = [
  appModule,
  authModule
]

const middlewares = [apiMiddleware()]

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger)
}


const storeConfig = {
  middlewares,
  decorateReducer: (reducer) => persistReducer(persistConfig, reducer)
}

const store = createStore(modules, storeConfig)

export const persistor = persistStore(store)
export default store
