import React from 'react';
import { MemoryRouter } from 'react-router';

import { mount } from 'enzyme';
import Navigation from '../src/components/Navigation';

describe('Navigation', () => {
  it('renders a nav element', () => {
    const wrapper = mount(<MemoryRouter><Navigation /></MemoryRouter>)
    expect(wrapper.type(), 'nav')
  });
});
