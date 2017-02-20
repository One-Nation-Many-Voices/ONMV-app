import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Types from './components/Types';
import Topics from './components/Topics';
import UserDashboard from './components/UserDashboard';
import Browse from './components/Browse';
import Location from './components/Location';
import $ from 'jquery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      location: ''
    }
  }

  componentWillMount() {
    this.getEventData()
  }

  getEventData() {
    $.get( "http://onmv-backend.herokuapp.com/api/v1/events/",
    function(data) {
      this.setState({
        data: data,
      });
    }.bind(this));
  }

  setLocation (option) {
    this.setState({location: option}, () => {
      let location = this.state.location.value;
      this.filterEventByLocation('AZ')
    }
  )}

  filterEventByLocation (value) {
    console.log(value);
    let data = this.state.data
    let filteredData = data.filter((event) => {
      return event.state == value
    })
    this.setState({data:filteredData})
  }

  render() {
    const { data, location } = this.state
    return (
      <BrowserRouter>
        <section>
          <Header/>

          <Match exactly pattern="/" render={ () => (
            <Home data={data}/>
          )} />

          <Match exactly pattern='/browse' component={Browse}/>

            <Match exactly pattern="/browse/types" component={Types}/>

              <Match exactly pattern='/browse/types/:id' />

            <Match exactly pattern="/browse/topics" component={Topics}/>

              <Match exactly pattern='/browse/topics/:id' />
              
          <Match exactly pattern="/location" render={ () => (
            <Location location={location} setLocation={this.setLocation.bind(this)}/>
          )}/>

          <Match exactly pattern="/dashboard" component={UserDashboard}/>

          <Navigation />
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
