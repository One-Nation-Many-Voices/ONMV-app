import React, {Component} from 'react';

class EventCard extends Component {
  render() {
    const {id, name, date, time, desc, city, state, location} = this.props
    return (
      <article className='home-card'>
        <h3> {name} </h3>
        <button> + </button>
        <h5>
          <span> {date} </span>
          <span> {time} </span>
        </h5>
        <h5>
          <span> {location}, </span>
          <span> {city}, {state} </span>
        </h5>
        <p> {desc} </p>
        <label>
          WR
        </label>
      </article>
    );
  };
}

module.exports = EventCard;
