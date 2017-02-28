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

  addDirections(data) {
    if (data.location !== "" || data.location !== null) {
      let directionsURL = `https://www.google.com/maps/place/+${data.location}+${data.city}+${data.state}`
      return <a className='directions' target='_blank' href={directionsURL} >Directions</a>
      } else {
      return null
    };
  };
  
  render () {
    let { searchString } = this.state
    let { filteredData } = this.props
    
    let eventList = filteredData.map((d) => {
      
      this.addDirections(d)
      let results = d.name + d.date + d.time + d.description + d.city + d.state + d.location
      return results.toLowerCase().includes(searchString.toLowerCase()) ?

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
        directions={this.addDirections(d)}
      />) :
      null
    })

    let message = displayMessageNoEvents(filteredData)

    return (
      <section id='all-page'>
        <h2 className='sub-header'> ALL EVENTS </h2>
        <Search onSearch={this.updateSearch.bind(this)}/>
        {eventList}
        <p className='event-message'> {message} </p>
      </section>
    );
  };
}

module.exports = AllEvents;
