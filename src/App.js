import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import TableList from './containers/TableList';
import Header from './components/Header';
import Footer from './components/Footer';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
            <div className="container">
              <TableList />
            </div>
          <Footer />
        </div>
      </Provider>
    )
  }
}

export default App;
