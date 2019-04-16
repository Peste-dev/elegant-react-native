import React from 'react'
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'

import App from './app/App'
import { AppStateProvider } from './app/context/app/appContext'
import { AuthStateProvider } from './app/context/auth/authContext'

const Elegant = () => (
  <AuthStateProvider>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </AuthStateProvider>
)

AppRegistry.registerComponent(appName, () => Elegant)
