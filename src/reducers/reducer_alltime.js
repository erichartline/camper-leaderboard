import { FETCH_ALLTIME } from '../actions/index';

const AllTimeUserReducer = (state = {allTimeUsers: []}, action) => {
  switch (action.type) {
    case FETCH_ALLTIME:
      // return new instance of state, do not mutate it
      return { ...state, allTimeUsers: action.payload };
    default:
      return state;
  }
}

export default AllTimeUserReducer;
