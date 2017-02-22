import React, { Component } from 'react';
import TypesButton from './TypesButton';

class Types extends Component {
  render(){
    return (
      <section id='types-page'>
        <h2 className='sub-header'> BROWSE </h2>
        <TypesButton navlink={'All'} name={'All'}/>
        <TypesButton navlink={'Town Hall'} name={'Townhalls'}/>
        <TypesButton navlink={'Coffee'} name={'Coffee'}/>
        <TypesButton navlink={'Office Hours'} name={'Office Hours'}/>
        <TypesButton navlink={'Ticketed Event'} name={'Ticketed Event'}/>
        <TypesButton navlink={'Other'} name={'Other'}/>
      </section>
    );
  }
}

module.exports = Types;
