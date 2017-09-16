import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Camper Leaderboard</h2>
        </div>
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>Camper Name</td>
              <td>Points in Last 30 Days</td>
              <td>All Time Points</td>
            </tr>
          </thead>
          <tbody>
            // props
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
