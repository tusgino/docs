import { combineReducers } from 'redux';
import clapReducer from './claps/slice';

const rootReducer = combineReducers({
  claps: clapReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;