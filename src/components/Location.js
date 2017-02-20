import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import options from '../../states.js'



class Location extends Component {
  constructor (props) {
    super(props)
    this.state = {
      location: options[0]
    }
    this.setLocation = this.setLocation.bind(this)
  }

  setLocation (option) {
    this.setState({location: option})
  }

  render () {
    const defaultOption = this.state.location

    return (
      <section>
        <h4>Customize Your Event Results by Setting a Location </h4>
        <Dropdown options={options} onChange={this.setLocation} value={defaultOption} placeholder="Select an option" />
        <div className='result'>
          You selected <span className="result-value">{this.state.location.value}</span>
        </div>
      </section>
    )
  }
}
        
        
        
module.exports = Location;