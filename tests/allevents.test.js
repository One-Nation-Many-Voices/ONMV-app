import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount, shallow } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';
import AllEvents from '../src/components/AllEvents';
import MockData from '../mock-data';

describe('AllEvents', () => {
  it('renders a section element', () => {
    const wrapper = mount(<MemoryRouter><AllEvents filteredData={MockData} /></MemoryRouter>)
    expect(wrapper.type(), 'section');
  });

  it('renders the EventCard component', () => {
    const wrapper = mount(<AllEvents filteredData={MockData}/>);
    assert.equal(wrapper.find('.home-card').length, 7);
  });

  it('sets initial state of searchString to an empty string', () => {
    const wrapper = shallow(<AllEvents filteredData={MockData} />);
    assert.equal(wrapper.state('searchString'), (''));
  });

  xit('can call updateSearch', () => {
    sinon.spy(AllEvents.prototype, 'updateSearch');
    const wrapper = mount(<AllEvents filteredData={MockData}/>);
    assert.equal(AllEvents.prototype.updateSearch.called, true);
  });
});
