import React, {Component} from 'react';
import EventCard from './EventCard';
import Search from './Search';
import displayMessageNoEvents from '../functions/displayMessageNoEvents';
import filterSearch from '../functions/filterSearch';
import renderEventCard from '../functions/renderEventCard';

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
      return filterSearch(d, searchString) ?
      renderEventCard(d) :
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
