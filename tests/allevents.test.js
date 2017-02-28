import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import AllEvents from '../src/components/AllEvents';
import MockData from '../mock-data';

describe('AllEvents', () => {
  xit('renders a nav element', () => {
    const wrapper = mount(<MemoryRouter><AllEvents /></MemoryRouter>)
    expect(wrapper.type(), 'section')
  });

  xit('renders the EventCard component', () => {
    const wrapper = mount(<AllEvents filteredData={MockData}/>)
    assert.equal(wrapper.find('.home-card').length, 7)
  });

  xit('sets initial state of searchString to an empty string', () => {
    const wrapper = shallow(<AllEvents />)
    assert.equal(wrapper.state('searchString'), (''))
  });

  xit('can call updateSearch', () => {
    sinon.spy(AllEvents.prototype, 'updateSearch')
    const wrapper = mount(<AllEvents />)
    assert.equal(AllEvents.prototype.updateSearch.calledOnce, true)
  });

  xit('can call updateSearch', () => {
    sinon.spy(AllEvents.prototype, 'updateSearch')
    const wrapper = mount(<AllEvents />)
    assert.equal(AllEvents.prototype.updateSearch.calledOnce, true)
  });
});
