import React from 'react';
import { Link } from 'react-router';
import { shallow } from 'enzyme';
import TypesButton from '../src/components/TypesButton';

describe('TypesButton', () => {
  it('renders a section element', () => {
    const wrapper = shallow(<TypesButton />)
    expect(wrapper.type(), 'article')
  });
});
