import React from 'react';
import ReactDOM from 'react-dom';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../components/Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});
