import React, {Component} from 'react';

class EventCard extends Component {
  render() {
    const {name, date, time, desc, city, state, location, directions} = this.props
    return (
      <article className='home-card'>
        <h3> {name} </h3>
        <h5>
          <span> {date} </span>
          <span> {time} </span>
        </h5>
        <h5>
          <span> {location} </span><br/>
          <span> {city}, {state} </span>
          <span> {directions} </span>
        </h5>
        <p> {desc} </p>
      </article>
    );
  };
}

module.exports = EventCard;
