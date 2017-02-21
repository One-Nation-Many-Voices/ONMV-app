import React from 'react';
import { Link } from 'react-router';
import { mount } from 'enzyme';
import Home from '../src/components/Home';

describe('Home', () => {
  it('renders a section element', () => {
    const wrapper = mount(<Home />)
    expect(wrapper.type(), 'section')
  });
});
