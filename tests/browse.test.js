import React from 'react';
import { mount } from 'enzyme';
import Browse from '../src/components/Browse';

describe('Browse', () => {
  xit('renders a section element', () => {
    const wrapper = mount(<Browse />)
    expect(wrapper.type(), 'section')
  });
});
