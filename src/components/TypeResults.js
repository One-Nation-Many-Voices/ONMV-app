import React, {Component} from 'react';
import EventCard from './EventCard';
import Search from './Search';

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
    let type = path.substr(path.lastIndexOf('/') + 1).replace("%20", " ")
    let data = this.props.filteredData
    let filteredType = data.filter((event) => {
      return event.event_type === type
    })
    this.setState({typeData: filteredType})
  }
  
  updateSearch(searchString) {
    this.setState({searchString: searchString});
  }

  render(){
    let { typeData, searchString } = this.state

    
    let eventList = typeData.map((d) => {
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
      <section id='types-results-page'>
        <Search onSearch={this.updateSearch.bind(this)}/>
        {eventList}
      </section>
    );
  }
}

module.exports = TypeResults;
