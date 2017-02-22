import React, {Component} from 'react';
import EventCard from './EventCard';

class Home extends Component {
  render () {
    let data = this.props.filteredData

    return (
      <section id='home-page'>
        <h2 className='sub-header'> HOME </h2>
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
