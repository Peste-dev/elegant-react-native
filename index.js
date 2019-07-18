import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'

import App from './app/App'

import { name as appName } from './app.json'

const Elegant = () => (
  <PaperProvider>
    <App />
  </PaperProvider>
)

AppRegistry.registerComponent(appName, () => Elegant)
