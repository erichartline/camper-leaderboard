const RECENT = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const ALLTIME = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

export const FETCH_RECENT = 'FETCH_RECENT';
export const FETCH_ALLTIME = 'FETCH_ALLTIME';

export const fetchRecentUsers = () => {
  return async dispatch => {
    try {
      const res = await fetch(RECENT)
      const json = await res.json()
      dispatch({
          type: FETCH_RECENT,
          payload: json
        });
    }
    catch (err) {
      dispatch({
        type: 'FETCH_RECENT_ERROR',
        payload: err
      });
    }
  }
}

export const fetchAllTimeUsers = () => {
  return async dispatch => {
    try {
      const res = await fetch(ALLTIME)
      const json = await res.json()
      dispatch({
          type: FETCH_ALLTIME,
          payload: json
        });
    }
    catch (err) {
      dispatch({
        type: 'FETCH_ALLTIME_ERROR',
        payload: err
      });
    }    
  }
}
