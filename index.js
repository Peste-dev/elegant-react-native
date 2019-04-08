import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'

import App from './app/App'
import store from 'store'

const Elegant = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => Elegant);
