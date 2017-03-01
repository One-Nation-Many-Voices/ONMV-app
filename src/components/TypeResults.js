import React, {Component} from 'react';
import EventCard from './EventCard';
import Search from './Search';
import displayMessageNoEvents from '../functions/displayMessageNoEvents';


class TypeResults extends Component {
  constructor() {
    super();
    this.state = {
      typeData: [],
      searchString: ''
    }
  }

  componentWillMount() {
    this.filterByType()
  }

  filterByType() {
    let path = window.location.pathname
    let type = path.substr(path.lastIndexOf('/') + 1).replace('%20', ' ')
    let data = this.props.filteredData

    type === 'All' ? this.returnAll(data) : this.returnType(data, type)
  }

  returnAll(data) {
    this.setState({typeData: data})
  }

  returnType(data, type) {
    let filteredType = data.filter((event) => {
      return event.event_type === type
    })
    this.setState({typeData: filteredType})
  }

  updateSearch(searchString) {
    this.setState({searchString: searchString});
  }

  render() {
    let { typeData, searchString } = this.state

    let eventList = typeData.map((d) => {
      let results = d.event_type + d.political_party + d.rep_first_name + d.rep_last_name + d.district + d.date + d.time + d.street + d.city + d.state + d.location
      return results.toLowerCase().includes(searchString.toLowerCase()) ?
      (<EventCard
        key={d.id}
        id={d.id}
        party={d.political_party}
        eventType={d.event_type}
        firstName={d.rep_first_name}
        lastName={d.rep_last_name}
        district = {d.district}
        date={d.date}
        time={d.time}
        street={d.street}
        city={d.city}
        state={d.state}
        location={d.location}
      />) :
      null
    })

    let message = displayMessageNoEvents(typeData)

    return (
      <section id='types-results-page'>
        <h2 className='sub-header'> EVENTS </h2>
        <Search onSearch={this.updateSearch.bind(this)}/>
        <p className='event-message'>
         {message}
        </p>
        <section className='event-list'>
        {eventList}
        </section>
      </section>
    );
  }
}

module.exports = TypeResults;
