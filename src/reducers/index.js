import { combineReducers } from 'redux';
import RecentUserReducer from './reducer_recent';
import AllTimeUserReducer from './reducer_alltime';

const rootReducer = combineReducers({
  recent: RecentUserReducer,
  allTime: AllTimeUserReducer
});

export default rootReducer;
