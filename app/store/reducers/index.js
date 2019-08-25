import {combineReducers} from 'redux';

import userReducer from './user';
import todosReducer from './todos';
import githubReducer from './github';

const rootReducers = combineReducers({
  user: userReducer,
  todos: todosReducer,
  github: githubReducer,
});

export default rootReducers;
