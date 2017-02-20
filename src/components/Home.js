import React, {Component} from 'react';
import EventCard from './EventCard';

class Home extends Component {
  render () {
    let data = this.props.data
    return (
      <section>
        {data.map(d => 
          <EventCard id={d.id} name={d.name} date={d.date} time={d.time} desc={d.description} city={d.city} state={d.city} location={d.location} />
          
        )}
      </section>
    );
  };
}

module.exports = Home;
