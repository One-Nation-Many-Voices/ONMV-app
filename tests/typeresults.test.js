import React from 'react';
import { Link } from 'react-router';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import TypeResults from '../src/components/TypeResults';
import MockData from '../mock-data';

describe('TypeResults', () => {
  it('renders a section element', () => {
    const wrapper = mount(<MemoryRouter><TypeResults filteredData={MockData} /></MemoryRouter>)
    expect(wrapper.type(), 'section')
  });
});
