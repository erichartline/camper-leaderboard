import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableListItem from './table_list_item';
import { fetchRecentUsers } from '../actions/index';

class TableList extends Component {
  componentWillMount() {
    this.props.dispatch(fetchRecentUsers());
  }

  sortTable(value) {
    if (this.state.showArrow !== value) {
      this.setState({ showArrow: value });
    }
  }

  render() {
    console.log(this.props)
    const { recentUsers, allTimeUsers, showArrow } = this.props;

    const recentList = recentUsers.map((user, index) => {
      return <TableListItem key={index} user={user} number={index + 1}/>
    });

    const allTimeList = allTimeUsers.map((user, index) => {
      return <TableListItem key={index} user={user} number={index + 1}/>
    });

    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <td className="item">#</td>
              <td>Camper Name</td>
              <td className="item sort" onClick={(e) => this.sortTable(true)}>Points in Last 30 Days {showArrow && (<i className="fa fa-caret-down" aria-hidden="true"></i>)}</td>
              <td className="item sort" onClick={(e) => this.sortTable(false)}>All Time Points {!showArrow && (<i className="fa fa-caret-down" aria-hidden="true"></i>)}</td>
              <td className="item">Last Activity</td>
            </tr>
          </thead>
          <tbody>
            {showArrow && recentList}
            {!showArrow && allTimeList}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (store) => (
  { recentUsers: store.recent.recentUsers, allTimeUsers: store.allTime.allTimeUsers, showArrow: true }
)

export default connect(mapStateToProps)(TableList);
