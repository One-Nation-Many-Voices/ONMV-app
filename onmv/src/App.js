import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import Header from './components/Header';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section>
          <Header/>

          <Navigation />
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
