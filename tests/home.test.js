import React from 'react';
import { shallow } from 'enzyme';
import Home from '../src/components/Home';
import MockData from '../mock-data';

describe('Home', () => {
  it('renders a section element', () => {
    const wrapper = shallow(<Home filteredData={MockData}/>)
    expect(wrapper.type(), 'section')
  });
});
