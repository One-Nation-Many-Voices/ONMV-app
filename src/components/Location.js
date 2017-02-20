import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import options from '../../states.js'

class Location extends Component {

  render () {
    const { location, setLocation } = this.props
    return (
      <section>
        <h4>Customize Your Event Results by Setting a Location </h4>
        <Dropdown options={options} onChange={setLocation.bind(this)} value={location} placeholder="Select an option" />
        <div className='result'>
          You selected <span className="result-value">{location.value}</span>
        </div>
      </section>
    )
  }
}



module.exports = Location;
