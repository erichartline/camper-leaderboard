import { FETCH_RECENT } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RECENT:
      // return new instance of state, do not mutate it
      return [ action.payload.data, ...state ];
    default:
      return state;
  }
}
