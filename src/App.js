import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// import individual components
import TableList from './containers/table_list';
import Header from './components/header';
import Footer from './components/footer';

// import spreadsheet
import './style/App.css';

// set variables for FCC APIs
const RECENT = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
const ALLTIME = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

// use named export for unconnected component (for tests)
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recentUsers: [],
      allTimeUsers: []
    }
  }

  componentWillMount() {
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
            <TableList recentUsers={this.state.recentUsers} allTimeUsers={this.state.allTimeUsers} />
          </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => (
  { recentUsers: state.recentUsers, allTimeUsers: state.allTimeUsers }
)

// use default export for the connected component (for app)
export default connect(mapStateToProps)(App);
