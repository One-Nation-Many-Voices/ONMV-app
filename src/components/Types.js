import React, { Component } from 'react';
import TypesButton from './TypesButton';

class Types extends Component {
  render(){
    return (
      <section>
        <TypesButton navlink={'all'} name={'All'}/>
        <TypesButton navlink={'townhalls'} name={'Townhalls'}/>
        <TypesButton navlink={'coffee'} name={'Coffee'}/>
        <TypesButton navlink={'officehours'} name={'Office Hours'}/>
        <TypesButton navlink={'other'} name={'Other'}/>
      </section>
    );
  }
}

module.exports = Types;
