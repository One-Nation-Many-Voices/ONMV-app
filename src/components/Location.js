import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import options from '../../states.js'

class Location extends Component {

  render () {
    const { location, setLocation } = this.props
    return (
      <section id='location-page'>
        <h2 className='sub-header'> SET LOCATION </h2>
        <h4 className='location-instructions'>Customize Your Event Results by Setting a Location </h4>
        <Dropdown options={options}
          onChange={setLocation.bind(this)}
          value={location}
          placeholder='Select an option'
          />
        <div className='result'>
          You selected
            <span className='result-value'> {location.label}</span>
        </div>
      </section>
    )
  }
}

module.exports = Location;
