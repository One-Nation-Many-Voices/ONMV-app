import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../src/components/Search';
import { assert, expect } from 'chai';
const sinon = require('sinon');

describe('Search', () => {
  it('renders a div element', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.type(), 'div')
  });

  it('should call the onSearch function when the dropdown is changed', () =>{
    let onSearch = sinon.spy();
    const wrapper = mount(<Search onSearch={onSearch}/>);
    wrapper.find('#search-input').simulate('change');
    expect(onSearch).to.have.property('callCount', 1);
  });
});
