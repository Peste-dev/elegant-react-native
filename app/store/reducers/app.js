import {createSlice} from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {language: {isRTL: true, name: 'fa'}, isFirsLaunch: true},
  reducers: {
    changeLanguage(state, action) {
      const {isRTL, name} = action.payload;
      state.language.name = name;
      state.language.isRTL = isRTL;
    },
    resetAppFirstLaunch(state) {
      state.isFirsLaunch = true;
    },
    setAppFirstLaunch(state) {
      state.isFirsLaunch = false;
    },
  },
});

export const {
  changeLanguage,
  setAppFirstLaunch,
  resetAppFirstLaunch,
} = appSlice.actions;

export default appSlice.reducer;
