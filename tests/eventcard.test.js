import React from 'react';
import { shallow, mount } from 'enzyme';
import EventCard from '../src/components/EventCard';

describe('EventCard', () => {
  it('renders a article element', () => {
    const wrapper = shallow(<EventCard />)
    expect(wrapper.type(), 'article')
  });
});
