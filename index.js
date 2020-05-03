import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {Provider as PaperProvider} from 'react-native-paper';
import {PreferencesContext} from 'context/preferencesContext';

import {store, persistor} from 'store/index';

import Loading from 'view/components/Loading';
import App from './app/App';

import {name as appName} from './app.json';

require('react-native').unstable_enableLogBox();

enableScreens();

const Elegant = () => {
  const [theme, setTheme] = React.useState('light');

  function toggleTheme() {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  }

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      theme,
    }),
    [theme],
  );
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <PreferencesContext.Provider value={preferences}>
          <PaperProvider>
            <App />
          </PaperProvider>
        </PreferencesContext.Provider>
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Elegant);
