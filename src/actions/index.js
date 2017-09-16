import axios from 'axios';

const RECENT = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const ALLTIME = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

export const FETCH_RECENT;
export const FETCH_ALLTIME;

export function fetchRecentUsers(user) {
  const recentRequest = axios.get(RECENT);

  return {
    type: FETCH_RECENT,
    payload: recentRequest
  }
}

export function fetchAllTimeUsers(user) {
  const allTimeRequest = axios.get(ALLTIME);

  return {
    type: FETCH_ALLTIME,
    payload: allTimeRequest
  }
}
