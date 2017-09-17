import React, { Component } from 'react';
import { connect } from 'react-redux';

class DataTable extends Component {
  renderRecentUsers(userData) {
    const name = userData.username;
    const allTime = userData.alltime;
    const recent = userData.recent;

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{name}</td>
        <td>{name}</td>
        <td>{name}</td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <td>#</td>
            <td>Camper Name</td>
            <td>Points in Last 30 Days</td>
            <td>All Time Points</td>
          </tr>
        </thead>
        <tbody>
          {this.props.recent.map(this.renderRecentUsers)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ recent, alltime }) {
  return { recent, alltime };
}

export default connect(mapStateToProps)(DataTable);
