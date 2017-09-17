import React, { Component } from 'react';
import DataTable from './containers/table_list';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DataTable />
      </div>
    );
  }
}

export default App;
