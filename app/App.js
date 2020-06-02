import React, {useEffect} from 'react';
import Navigator from 'routes';
import {Provider as PaperProvider} from 'react-native-paper';
import themes from 'view/style/themes';
import {getTheme} from 'store/selectors/appearance';
import {useSelector, useDispatch} from 'react-redux';
import {StatusBar, useColorScheme} from 'react-native';
import {toggleTheme} from './store/reducers/appearance';

const App = () => {
  const dispatch = useDispatch();
  const colorSchema = useColorScheme();
  const theme = useSelector(getTheme);
  if (colorSchema && colorSchema != theme) dispatch(toggleTheme());
  
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
