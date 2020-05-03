import {Colors} from 'react-native-paper';
import color from 'color';

import LightTheme from './light';

export default {
  ...LightTheme,
  dark: true,
  mode: 'adaptive',
  colors: {
    ...LightTheme.colors,
    primary: '#56b387',
    accent: '#b9b9b9',
    background: '#121212',
    surface: '#121212',
    error: '#CF6679',
    onBackground: '#FFFFFF',
    onSurface: '#FFFFFF',
    text: Colors.white,
    clickable: '#4c4cf9',
    disabled: color(Colors.white)
      .alpha(0.38)
      .rgb()
      .string(),
    placeholder: '#cacaca',
    backdrop: color(Colors.black)
      .alpha(0.5)
      .rgb()
      .string(),
    notification: Colors.pinkA100,
  },
};
