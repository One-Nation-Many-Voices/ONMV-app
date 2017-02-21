import React, {Component} from 'react';
import EventCard from './EventCard';

class TypeResults extends Component {
  render(){
  let result = (this.props.params).navID;

    return (
      <section >
        <h2> Type Results </h2>

      </section>
    );
  }
}

module.exports = TypeResults;
