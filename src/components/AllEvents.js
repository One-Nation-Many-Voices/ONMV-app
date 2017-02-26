import React, {Component} from 'react';
import EventCard from './EventCard';
import Search from './Search';
import displayMessageNoEvents from '../functions/displayMessageNoEvents';

class AllEvents extends Component {
  constructor() {
    super();
    this.state = {
      searchString: '',
    }
  }

  updateSearch(searchString) {
    this.setState({searchString: searchString});
  }

  render () {
    let { searchString } = this.state
    let { filteredData } = this.props

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

    let message = displayMessageNoEvents(filteredData)

    return (
      <section id='all-page'>
        <Search onSearch={this.updateSearch.bind(this)}/>
        <h2 className='sub-header'> ALL EVENTS </h2>
        {eventList}
        <p className='event-message'> {message} </p>
      </section>
    );
  };
}

module.exports = AllEvents;
