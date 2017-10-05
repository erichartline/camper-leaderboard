import { FETCH_ALLTIME } from '../actions/index';

const AllTimeUserReducer = (state = {recentUsers: [], allTimeUsers: [], showArrow: false}, action) => {
  switch (action.type) {
    case FETCH_ALLTIME:
      // return new instance of state, do not mutate it
      return [ ...state, action.payload.data ];
    default:
      return state;
  }
}

export default AllTimeUserReducer;
