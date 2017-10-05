import { FETCH_ALLTIME } from '../actions/index';

const AllTimeUserReducer = (state = {allTimeUsers: [], showArrow: false}, action) => {
  switch (action.type) {
    case FETCH_ALLTIME:
      // return new instance of state, do not mutate it
      return { ...state, allTimeUsers: action.payload, showArrow: false };
    default:
      return state;
  }
}

export default AllTimeUserReducer;
