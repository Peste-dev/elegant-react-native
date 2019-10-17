import {combineReducers} from 'redux';

import userReducer from './user';
import todosReducer from './todos';
import githubReducer from './github';
import appReducer from './app';

const rootReducers = combineReducers({
  user: userReducer,
  todos: todosReducer,
  github: githubReducer,
  app: appReducer,
});

export default rootReducers;
