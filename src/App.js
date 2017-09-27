import React, { Component } from 'react';
import axios from 'axios';
// import DataTable from './containers/table_list';
import './style/App.css';

const RECENT = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const ALLTIME = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recentUsers: [],
      allTimeUsers: [],
      current: true
    }
  }

  componentWillMount() {
    axios.all([this.fetchRecentUsers(), this.fetchAllTimeUsers()])
      .then(axios.spread((recentUsers, allTimeUsers) => {
        this.setState({ recentUsers: recentUsers.data, allTimeUsers: allTimeUsers.data });
    }));
  }
  
  fetchRecentUsers() {
    return axios.get(RECENT);
  }

  fetchAllTimeUsers() {
    return axios.get(ALLTIME);
  }

  listSort(current) {
    if (this.state.current !== current) {
      this.setState({current});
    }
  }

  render() {
    const {recentUsers, allTimeUsers, current} = this.state;

    return (
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              Leaderboard
            </tr>
            <tr>
              <td>#</td>
              <td>Camper Name</td>
              <td onClick={(e) => this.listSort(true)}>Points in Last 30 Days {current && (<i className="fa fa-caret-down" aria-hidden="true"></i>)}</td>
              <td onClick={(e) => this.listSort(false)}>All Time Points {!current && (<i className="fa fa-caret-down" aria-hidden="true"></i>)}</td>
            </tr>
          </thead>
          <tbody>
            {current && recentUsers.map((row, index) => (
              <tr key={row.username}>
                <td>{index + 1}</td>
                <td><a href={`https://www.freecodecamp.org/${row.username}`}>{row.username}</a></td>
                <td>{row.recent}</td>
                <td>{row.alltime}</td>
              </tr>
              )
            )}

            {!current && allTimeUsers.map((row, index) => (
              <tr key={row.username}>
                <td>{index + 1}</td>
                <td><a href={`https://www.freecodecamp.org/${row.username}`}>{row.username}</a></td>
                <td>{row.recent}</td>
                <td>{row.alltime}</td>
              </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
