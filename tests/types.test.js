import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { assert, expect } from 'chai';
import Types from '../src/components/Types';

describe('Types', () => {
  it('renders a section element', () => {
    const wrapper = mount(<MemoryRouter><Types/></MemoryRouter>)
    expect(wrapper.type(), 'section')
  });

  it('renders the TypesButton component', () => {
    const wrapper = mount(<MemoryRouter><Types/></MemoryRouter>);
    assert.equal(wrapper.find('.types-nav').length, 6);
  });

});
