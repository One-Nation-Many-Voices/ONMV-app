import React from 'react';
import { Link } from 'react-router';
import { shallow, mount } from 'enzyme';
import Location from '../src/components/Location';
import App from '../src/App';
import Dropdown from 'react-dropdown';
import { assert, expect } from 'chai';

const sinon = require('sinon');

describe('Location', () => {
  it('renders a section element', () => {
    let setLocation = sinon.spy();
    const wrapper = shallow(<Location setLocation={setLocation} location={'California'}/>)
    expect(wrapper.type(), 'section')
  });

  it('should call the set location function when the dropdown is changed', () =>{
    let setLocation = sinon.spy();
    const wrapper = mount(<Location setLocation={setLocation} location={'California'}/>);
    wrapper.find(Dropdown).simulate('change');
    assert.equal(wrapper.props().setLocation.called, true);
  });
});
