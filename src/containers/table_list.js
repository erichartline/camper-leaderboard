import React, { Component } from 'react';

class DataTable extends Component {

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

        </tbody>
      </table>
    )
  }
}

export default DataTable;
