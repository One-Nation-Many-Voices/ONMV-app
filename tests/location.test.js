import React from 'react';
import { Link } from 'react-router';
import { mount } from 'enzyme';
import Location from '../src/components/Location';

describe('Location', () => {
  it('renders a section element', () => {
    const wrapper = mount(<Location />)
    expect(wrapper.type(), 'section')
  });
});
