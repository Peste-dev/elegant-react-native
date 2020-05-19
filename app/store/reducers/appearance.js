import {createSlice} from '@reduxjs/toolkit';

const appearanceSlice = createSlice({
  name: 'appearance',
  initialState: {
    theme: 'light',
  },
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const {toggleTheme} = appearanceSlice.actions;

export default appearanceSlice.reducer;
