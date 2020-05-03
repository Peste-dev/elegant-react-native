import {createContext} from 'react';

export const PreferencesContext = createContext({
  rtl: 'left',
  theme: 'light',
  toggleTheme: () => {},
  toggleRTL: () => {},
});
