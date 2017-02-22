import React, {Component} from 'react';
import EventCard from './EventCard';
import Search from './Search';

class Home extends Component {
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
    
    return (
      <section id='home-page'>
        <Search onSearch={this.updateSearch.bind(this)}/>
        <h2 className='sub-header'> HOME </h2>
        {eventList}
      </section>
    );
  };
}

module.exports = Home;
