import React from 'react';
import { Link } from 'react-router';
import { shallow, mount } from 'enzyme';
import Location from '../src/components/Location';
import App from '../src/App';

const sinon = require('sinon');

describe('Location', () => {
  xit('renders a section element', () => {    
    const wrapper = shallow(<Location setLocation={'California'}/>)
    expect(wrapper.type(), 'section')
  });

  it('should call the set location function when the dropdown is changed', () =>{
    let setLocation = sinon.spy();
    const wrapper = mount(<Location setLocation={setLocation}/>);
    wrapper.find('#dropdown').simulate('change');
    expect(setLocation).to.have.property('callCount', 1);
  });
});
