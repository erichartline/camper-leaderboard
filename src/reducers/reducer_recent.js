import { FETCH_RECENT } from '../actions/index';

const RecentUserReducer = (state = {recentUsers: [], allTimeUsers: [], showArrow: true}, action) => {
  switch (action.type) {
    case FETCH_RECENT:
      // return new instance of state, do not mutate it
      return [ ...state, action.payload.data ];
    default:
      return state;
  }
}

export default RecentUserReducer;
