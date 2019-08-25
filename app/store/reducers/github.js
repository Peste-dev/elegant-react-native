import {createSlice} from 'redux-starter-kit';

const githubSlice = createSlice({
  slice: 'github',
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

//       [ActionTypes.GITHUB_GET_REPOS_SUCCESS]: (state, {payload}) =>
//         immutable(state, {
//           repos: {
//             data: {
//               [state.repos.query]: {$set: payload.data || []},
//             },
//             status: {$set: STATUS.READY},
//           },
//         }),
//       [ActionTypes.GITHUB_GET_REPOS_FAILURE]: (state, {payload}) =>
//         immutable(state, {
//           repos: {
//             message: {$set: payload.message || 'Something went wrong'},
//             status: {$set: STATUS.ERROR},
//           },
//         }),
//     },
//     githubState,
//   ),
// };
