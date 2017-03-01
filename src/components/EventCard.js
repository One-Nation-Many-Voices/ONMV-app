import React, {Component} from 'react';

class EventCard extends Component {

  getDirections(location, state, city) {
    if (location !== '' || location !== null) {
      let directionsURL = `https://www.google.com/maps/place/+${location}+${city}+${state}`
      return <a className='directions' target='_blank' href={directionsURL}>
              <img  className='address-icon' src='./icons/checkin2.svg' alt='location icon'/>
            </a>
    }
    else {
      return null
    };
  };

  render() {
    const {id, party, eventType, firstName, lastName, district, date, time, location, street, city, state} = this.props
    let directions = this.getDirections(location, state, city)

    return (
      <section className='home-card' id={id}>
        <span className={party}>

        <h3 className='event-title'> {eventType} </h3>
        </span>

        <h5 className='rep-info'>
          <span className='rep-name'>{firstName} {lastName} </span><br/>
          {district}
        </h5>

        <article className='time-date'>
          <img  className='calendar-icon' src='./icons/calendar-icon.svg' alt='calendar icon'/>
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
