import React from 'react';
import { Link } from 'react-router';
import { shallow } from 'enzyme';
import Location from '../src/components/Location';

describe('Location', () => {
  xit('renders a section element', () => {
    const wrapper = shallow(<Location />)
    expect(wrapper.type(), 'section')
  });
});
