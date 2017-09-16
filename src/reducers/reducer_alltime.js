import { FETCH_ALLTIME } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ALLTIME:
      // return new instance of state, do not mutate it
      // return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ];
  }

  return state;
}
