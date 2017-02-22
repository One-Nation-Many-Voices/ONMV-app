import React, {Component} from 'react';
import EventCard from './EventCard';

class Home extends Component {
  render () {
    let { filteredData, searchString } = this.props
    
    let eventList = filteredData.map((d) => {
      return d.name.toLowerCase().includes(searchString.toLowerCase()) ?
      (<EventCard
        key={d.id}
        id={d.id}
        name={d.name}
        date={d.date}
        time={d.time}
        desc={d.description}
        city={d.city}
        state={d.state}
        location={d.location}
      />) :
      null
    })
    
    return (
      <section id='home-page'>
        <h2 className='sub-header'> HOME </h2>
        {eventList}
      </section>
    );
  };
}

module.exports = Home;
