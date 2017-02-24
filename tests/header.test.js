import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/components/Header';

describe('Header', () => {
  it('renders a header element', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.type(), 'header')
  });
});
