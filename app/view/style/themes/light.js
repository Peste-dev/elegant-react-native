import {DefaultTheme, configureFonts, Colors} from 'react-native-paper';
import color from 'color';

import {defaultFontConfig} from './fonts';

export default {
  dark: false,
  roundness: 4,
  colors: {
    primary: '#56b387',
    accent: '#b9b9b9',
    background: Colors.white,
    surface: Colors.white,
    error: '#f16361',
    text: Colors.black,
    clickable: '#0294A5',
    onBackground: '#000000',
    onSurface: '#000000',
    disabled: color(Colors.black).alpha(0.26).rgb().string(),
    placeholder: '#cacaca',
    backdrop: color(Colors.black).alpha(0.5).rgb().string(),
    notification: Colors.pinkA400,
  },
  animation: {
    scale: 1.0,
  },
  fonts: configureFonts(defaultFontConfig),
};
