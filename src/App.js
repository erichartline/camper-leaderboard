import React, { Component } from 'react';
import TableList from './containers/table_list';
import Header from './components/header';
import Footer from './components/footer';
import './style/App.css';

// use named export for unconnected component (for tests)
export class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <div className="container">
            <TableList />
          </div>
        <Footer />
      </div>
    )
  }
}

// use default export for the connected component (for app)
export default App;
