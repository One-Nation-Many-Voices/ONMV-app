import React, {Component} from 'react';
import EventCard from './EventCard';

class TypeResults extends Component {
  constructor() {
    super();
    this.state = {
      typeData: [],
    }
  }
  
  componentWillMount() {
    let path = window.location.pathname
    // let type = path.substr(path.lastIndexOf('/') + 1);
    let type = "Town Hall"
    let data = this.props.data
    
    let filteredType = data.filter((event) => {
    
      return event.event_type === type
    })
    this.setState({typeData:filteredType})
  }
  
  render(){
    let data = this.state.typeData
    return (
      <section>
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
