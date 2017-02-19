import React from 'react';
import { Link } from 'react-router';
import { mount } from 'enzyme';
import UserDashboard from '../src/components/UserDashboard';

describe('UserDashboard', () => {
  it('renders a section element', () => {
    const wrapper = mount(<UserDashboard />)
    expect(wrapper.type(), 'section')
  });
});
