import React, {Component} from 'react';
import EventCard from './EventCard';
import displayMessageNoEvents from '../functions/displayMessageNoEvents';

class TypeResults extends Component {
  constructor() {
    super();
    this.state = {
      typeData: [],
    }
  }

  componentWillMount() {
    this.filterByType()
  }

  filterByType() {
    let path = window.location.pathname
    let type = path.substr(path.lastIndexOf('/') + 1).replace("%20", " ")
    let data = this.props.filteredData
    let filteredType = data.filter((event) => {
      return event.event_type === type
    })
    this.setState({typeData: filteredType})
  }

  render(){

    let data = this.state.typeData
    let message = displayMessageNoEvents(data)

    return (
      <section id='types-results-page'>
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
  }
}

module.exports = TypeResults;
