import React from 'react';
import { Link } from 'react-router';
import { mount } from 'enzyme';
import Types from '../src/components/Types';

describe('Types', () => {
  it('renders a section element', () => {
    const wrapper = mount(<Types />)
    expect(wrapper.type(), 'section')
  });
});
