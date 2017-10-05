import axios from 'axios';

const RECENT = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const ALLTIME = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

export const FETCH_RECENT = 'FETCH_RECENT';
export const FETCH_ALLTIME = 'FETCH_ALLTIME';

export function fetchRecentUsers() {
  return function(dispatch) {
    axios.get(RECENT)
      .then((response) => {
        dispatch({
          type: FETCH_RECENT,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_RECENT_ERROR',
          payload: error
        });
      });
  }
}

export function fetchAllTimeUsers() {
  return function(dispatch) {
    axios.get(ALLTIME)
      .then((response) => {
        dispatch({
          type: FETCH_ALLTIME,
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_ALLTIME_ERROR',
          payload: error
        });
      });
  }
}
