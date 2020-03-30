import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {loggedIn: false, onCheck: false},
  reducers: {
    login: (state) => ({...state, onCheck: true}),
    loginSuccess(state) {
      state.onCheck = false;
      state.loggedIn = true;
    },
    logout: (state) => ({...state, onCheck: true}),
    logoutSuccess(state) {
      state.onCheck = false;
      state.loggedIn = false;
    },
  },
});

export const {login, loginSuccess, logout, logoutSuccess} = userSlice.actions;

export default userSlice.reducer;
