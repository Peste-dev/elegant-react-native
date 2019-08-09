import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider as PaperProvider } from 'react-native-paper'
import { ReduxNetworkProvider } from 'react-native-offline'
import { store, persistor } from 'store/index'

import Loading from 'view/components/Loading'
import App from './app/App'

import { name as appName } from './app.json'

const Elegant = () => (
  <Provider store={store}>
    <ReduxNetworkProvider>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <PaperProvider>
          <App />
        </PaperProvider>
      </PersistGate>
    </ReduxNetworkProvider>
  </Provider>
)

AppRegistry.registerComponent(appName, () => Elegant)
