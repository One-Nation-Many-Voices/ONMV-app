import React from 'react';
import { Link } from 'react-router';
import { mount } from 'enzyme';
import Topics from '../src/components/Topics';

describe('Topics', () => {
  it('renders a section element', () => {
    const wrapper = mount(<Topics />)
    expect(wrapper.type(), 'section')
  });
});
