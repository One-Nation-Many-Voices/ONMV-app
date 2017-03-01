import React, {Component} from 'react';

class EventCard extends Component {
  render() {
    const {party, eventType, firstName, lastName, district, date, time, location, street, city, state, directions} = this.props
    return (
      <article className='home-card'>
        <span className={party}>
        <h3 className='event-title'> {eventType} </h3>
        </span>
        <h5 className='rep-info'> <span className='rep-name'>{firstName} {lastName} </span><br/>
          {district}
        </h5>
        <p className='time-date'>
          <img  className='address-icon' src='./icons/calendar-icon.svg' alt='location icon'/>
          <p className='date-details'>
            <div className='date-name'> {date} </div>
            <span> {time} </span>
          </p>
        </p>
        <p className='address-location'>
          <img  className='address-icon' src='./icons/checkin2.svg' alt='location icon'/>
          <p className='address-details'>
            <div className='address-location-name'> {location} </div>
            <span> {street} </span> <br/>
            <span> {city}, {state} </span>
          </p>
        </p>
      </article>
    );
  };
}

module.exports = EventCard;
