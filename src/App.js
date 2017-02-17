import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Types from './components/Types';
import Topics from './components/Topics';
import UserDashboard from './components/UserDashboard';
import data from '../townhall_data.js'

class App extends Component {
  constructor() {
    super();
		this.state = {
      data: data
    }
  }
      
  render() {
    return (
      <BrowserRouter>
        <section>
          <Header/>

          <Match exactly pattern="/" component={Home}/>

          <Match exactly pattern="/types" component={Types}/>

          <Match exactly pattern="/topics" component={Topics}/>

          <Match exactly pattern="/dashboard" component={UserDashboard}/>

          <Navigation />
        </section>
      </BrowserRouter>
    );
  }
}

export default App;