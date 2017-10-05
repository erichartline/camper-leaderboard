import { FETCH_RECENT } from '../actions/index';

const RecentUserReducer = (state = {recentUsers: [], showArrow: true}, action) => {
  switch (action.type) {
    case FETCH_RECENT:
      // return new instance of state, do not mutate it
      return { ...state, recentUsers: action.payload };
    default:
      return state;
  }
}

export default RecentUserReducer;
