import React, {Component} from 'react';
import EventCard from './EventCard';
import Search from './Search';
import displayMessageNoEvents from '../functions/displayMessageNoEvents';
import filterSearch from '../functions/filterSearch';
import renderEventCard from '../functions/renderEventCard';

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
    return filterSearch(d, searchString) ?
    renderEventCard(d) :
     null
    })

    let message = displayMessageNoEvents(filteredData)

    return (
      <section id='all-page'>
        <h2 className='sub-header'> ALL EVENTS </h2>
        <Search onSearch={this.updateSearch.bind(this)}/>
        <section className='event-list'>
        {eventList}
        </section>
        <p className='event-message'> {message} </p>
      </section>
    );
  };
}

module.exports = AllEvents;
