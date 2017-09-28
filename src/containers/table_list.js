import React from 'react';
import TableListItem from './table_list_item';

const TableList = ({ users }) => {

  const Items = users.map((user, index) => {
    return <TableListItem key={index} user={user} number={index + 1}/>
  });

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <td className="item">#</td>
            <td>Camper Name</td>
            <td className="item sort">Points in Last 30 Days <i className="fa fa-caret-down" aria-hidden="true"></i></td>
            <td className="item sort">All Time Points <i className="fa fa-caret-down" aria-hidden="true"></i></td>
            <td className="item">Last Activity</td>
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
