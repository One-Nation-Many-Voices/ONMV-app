import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Types from './components/Types';
import Topics from './components/Topics';
import UserDashboard from './components/UserDashboard';
import Browse from './components/Browse';
import Location from './components/Location';
import data from '../townhall_data.js';
import $ from 'jquery';

class App extends Component {
  constructor() {
    super();
  }
  
  componentDidMount() {
    this.getEventData()
  }
  
  getEventData() {
    $.get( "https://onmv-backend.herokuapp.com/api/v1/events/" )
    .done(function( data ) {
      console.log( "Data Loaded: " + data );
    });
  };

  render() {
    return (
      <BrowserRouter>
        <section>
          <Header/>

          <Match exactly pattern="/" component={Home}/>

          <Match exactly pattern='/browse' component={Browse}/>

            <Match exactly pattern="/browse/types" component={Types}/>

            <Match exactly pattern="/browse/topics" component={Topics}/>

          <Match exactly pattern="/location" component={Location}/>

          <Match exactly pattern="/dashboard" component={UserDashboard}/>

          <Navigation />
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
