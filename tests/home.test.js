import React from 'react';
import { Link } from 'react-router';
import { shallow } from 'enzyme';
import Home from '../src/components/Home';
import data from '../mock-event';

describe('Home', () => {
  it('renders a section element', () => {
    const wrapper = shallow(<Home filteredData={data}/>)
    expect(wrapper.type(), 'section')
  });
});
