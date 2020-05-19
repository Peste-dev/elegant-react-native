import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {PersistGate} from 'redux-persist/lib/integration/react';

import {store, persistor} from 'store/index';

import Loading from 'view/components/Loading';
import App from './app/App';

import {name as appName} from './app.json';

require('react-native').unstable_enableLogBox();

enableScreens();

const Elegant = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Elegant);
