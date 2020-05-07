import {createSlice} from '@reduxjs/toolkit';

const githubSlice = createSlice({
  name: 'github',
  initialState: {
    loading: false,
    error: false,
    data: [],
    message: '',
    query: '',
  },
  reducers: {
    getRepos: {
      reducer(state, action) {
        const {query} = action.payload;

        state.data = [];
        state.error = false;
        state.query = query;
        state.loading = true;
      },
      prepare(query) {
        return {payload: {query}};
      },
    },
    getReposSuccess(state, action) {
      const {data} = action.payload;

      state.data = data;
      state.loading = false;
    },
    getReposFailure(state, action) {
      const {text} = action.payload;

      state.error = true;
      state.message = text;
      state.loading = false;
    },
  },
});

export const {getRepos, getReposSuccess, getReposFailure} = githubSlice.actions;

export default githubSlice.reducer;
