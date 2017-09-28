import React from 'react';
import TableListItem from './table_list_item';

const TableList = ({ users }) => {

  const Items = users.map((user, index) => {
    return <TableListItem key={index} user={user} number={index + 1}/>
  });

  return (
    <div className="container">
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <td>#</td>
            <td>Camper Name</td>
            <td>Points in Last 30 Days <i className="fa fa-caret-down" aria-hidden="true"></i></td>
            <td>All Time Points <i className="fa fa-caret-down" aria-hidden="true"></i></td>
            <td>Last Activity</td>
          </tr>
        </thead>
        <tbody>
          {Items}
        </tbody>
      </table>
    </div>
  )
}

export default TableList;
