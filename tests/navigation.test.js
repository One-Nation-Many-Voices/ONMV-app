import React from 'react';
import { mount } from 'enzyme';
import Navigation from '../src/components/Navigation';

describe('Navigation', () => {
  xit('renders a nav element', () => {
    const wrapper = mount(<Navigation />)
    expect(wrapper.type(), 'nav')
  });
});
