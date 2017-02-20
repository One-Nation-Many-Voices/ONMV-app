import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import options from '../../states.js'



class Location extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: options[0]
    }
    this.onSelect = this.onSelect.bind(this)
  }

  onSelect (option) {
    this.setState({selected: option})
  }

  render () {
    const defaultOption = this.state.selected

    return (
      <section>
        <h4>Customize Your Event Results by Setting a Location </h4>
        <Dropdown options={options} onChange={this.onSelect} value={defaultOption} placeholder="Select an option" />
        <div className='result'>
          You selected <span className="result-value">{this.state.selected.value}</span>
        </div>
      </section>
    )
  }
}
        
        
        
module.exports = Location;