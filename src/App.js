import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import TableList from './containers/table_list';
import Header from './components/header';
import Footer from './components/footer';
import './style/App.css';

// set variables for FCC APIs
const RECENT = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const ALLTIME = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recentUsers: [],
      allTimeUsers: []
    }
  }

  componentDidMount() {
    axios.all([this.fetchRecentUsers(), this.fetchAllTimeUsers()])
      .then(axios.spread((recentUsers, allTimeUsers) => {
        this.setState({ recentUsers: recentUsers.data, allTimeUsers: allTimeUsers.data });
    }))
      .catch((error) => {
        console.log(error)
      });
  }

  fetchRecentUsers() {
    return axios.get(RECENT);
  }

  fetchAllTimeUsers() {
    return axios.get(ALLTIME);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <TableList users={this.state.recentUsers} />
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => (
  { recentUsers: state.recentUsers }
)

export default connect(mapStateToProps, null)(App);
