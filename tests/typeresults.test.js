import React from 'react';
import { Link } from 'react-router';
import { mount } from 'enzyme';
import TypeResults from '../src/components/TypeResults';

describe('TypeResults', () => {
  xit('renders a section element', () => {
    const wrapper = mount(<TypeResults />)
    expect(wrapper.type(), 'section')
  });
});
