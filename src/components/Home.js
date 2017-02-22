import React, {Component} from 'react';
import EventCard from './EventCard';
import displayMessageNoEvents from '../functions/displayMessageNoEvents';

class Home extends Component {
  render () {
    let data = this.props.filteredData

    let message = displayMessageNoEvents(data)

    return (
      <section id='home-page'>
        <h2 className='sub-header'> HOME </h2>
        <h4 className='event-message'> {message} </h4>
        {data.map(d =>
          <EventCard
            key={d.id}
            id={d.id}
            name={d.name}
            date={d.date}
            time={d.time}
            desc={d.description}
            city={d.city}
            state={d.state}
            location={d.location}
          />
        )}
      </section>
    );
  };
}

module.exports = Home;
