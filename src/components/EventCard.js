import React, { Component } from 'react';
import getDirections from '../functions/getDirections';
import Calendar from './Calendar'

class EventCard extends Component {
    
  render() {
    const {party, eventType, firstName, lastName, district, date, time, location, street, city, state} = this.props
    let directions = getDirections(location, state, city)

    return (
      <section className='home-card'>
        <span className={party}>
        <h3 className='event-title'> {eventType} </h3>
        </span>
        <h5 className='rep-info'>
          <span className='rep-name'>{firstName} {lastName} </span><br/>
          {district}
        </h5>
        <article className='time-date'>
          {/* <div  className='calendar-icon'>
          </div> */}
          <Calendar date={date} time={time} location={location} eventType={eventType} firstName={firstName} lastName={lastName}/>
          <article className='date-details'>
            <div className='date-name'> {date} </div>
            <span> {time} </span>
          </article>
        </article>
        <article className='address-location'>
            {directions}
          <article className='address-details'>
            <div className='address-location-name'> {location} </div>
            <span> {street} </span> <br/>
            <span> {city}, {state} </span>
          </article>
        </article>
      </section>
    );
  };
}

module.exports = EventCard;
