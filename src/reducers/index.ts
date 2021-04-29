import { combineReducers } from 'redux';
import { user } from './user';
import { mode } from './mode';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  user,
  mode,
});

export default rootReducer;
