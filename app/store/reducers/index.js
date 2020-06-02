import {combineReducers} from 'redux';

import userReducer from './user';
import todosReducer from './todos';
import githubReducer from './github';
import appReducer from './app';
import appearanceReducer from './appearance';

const rootReducers = combineReducers({
  user: userReducer,
  todos: todosReducer,
  github: githubReducer,
  app: appReducer,
  appearance : appearanceReducer
});

export default rootReducers;
