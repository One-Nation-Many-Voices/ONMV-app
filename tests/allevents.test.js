import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import AllEvents from '../src/components/AllEvents';

describe('AllEvents', () => {
  xit('renders a nav element', () => {
    const wrapper = mount(<MemoryRouter><AllEvents /></MemoryRouter>)
    expect(wrapper.type(), 'section')
  });

  xit('sets initial state of selectedMovie to an empty string', () => {
   const wrapper = shallow(<BrowseCurrent />)
   assert.equal(wrapper.state('selectedMovie'), (''))
  });
});
