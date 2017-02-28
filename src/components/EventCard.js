import React, {Component} from 'react';

class EventCard extends Component {
  render() {
    const {eventType, firstName, lastName, district, date, time, location, street, city, state, directions} = this.props
    return (
      <article className='home-card'>
        <h3 className='event-title'> {eventType} </h3>
        <h5 className='rep-info'> <span className='rep-name'>{firstName} {lastName} </span><br/>
          {district}
        </h5>
        <p className='time-date'>
          <span> {date} </span><br/>
          <span> {time} </span>
        </p>
        <p className='address-location'>
          <span> {location} </span><br/>
          <span> {street} </span> <br/>
          <span> {city}, {state} </span>
        </p>
      </article>
    );
  };
}

module.exports = EventCard;
