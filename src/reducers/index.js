import { combineReducers } from 'redux';
import RecentUserReducer from './reducer_recent';
import AllTimeUserReducer from './reducer_alltime';

const rootReducer = combineReducers({
  recent: RecentUserReducer,
  alltime: AllTimeUserReducer
});

export default rootReducer;
