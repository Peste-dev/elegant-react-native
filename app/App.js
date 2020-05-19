import React, {useEffect} from 'react';
import Navigator from 'routes';
import {Provider as PaperProvider} from 'react-native-paper';
import themes from 'view/style/themes';
import {getTheme} from 'store/selectors/appearance';
import {useSelector} from 'react-redux';
import {StatusBar} from 'react-native';

const App = () => {
  const theme = useSelector(getTheme);
  useEffect(() => {
    if (theme === 'light') {
      StatusBar.setBarStyle('dark-content');
    } else {
      StatusBar.setBarStyle('light-content');
    }
  }, [theme]);
  return (
    <PaperProvider theme={themes[theme]}>
      <Navigator />
    </PaperProvider>
  );
};

export default App;
