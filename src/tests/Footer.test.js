import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Footer from '../components/Footer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
});

test('should render Header correctly', () => {
  const wrapper = shallow(<Footer />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
