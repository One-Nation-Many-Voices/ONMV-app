import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Types from './components/Types';
import UserDashboard from './components/UserDashboard';
import Location from './components/Location';
import TypeResults from './components/TypeResults';
import $ from 'jquery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredData: [],
      location: ''
    }
  }

  componentWillMount() {
    this.getEventData()
  }

  getEventData() {
    $.get( "https://onmv-backend.herokuapp.com/api/v1/events/",
    function(data) {
      this.setState({
        data: data,
        filteredData: data
      });
    }.bind(this));
  }

  setLocation (option) {
    this.setState({location: option}, () => {
      let location = this.state.location.value;
      this.filterEventByLocation(location)
    }
  )}

  filterEventByLocation (value) {
    let array = this.state.data
    let filteredData = array.filter((event) => {
      return event.state === value
    })
    this.setState({filteredData:filteredData})
  }

  render() {
    const { data, location, filteredData } = this.state
    return (
      <BrowserRouter>
        <section>

          <Header/>

          <Match exactly pattern='/' render={ () => (
            <Home data={data} filteredData={filteredData}/>
          )} />

          <Match exactly pattern='/types' component={Types}/>

            <Match exactly pattern='/types/:navID' render={ () => (
              <TypeResults data={data} filteredData={filteredData} />
            )} />

          <Match exactly pattern='/location' render={ () => (
            <Location location={location} setLocation={this.setLocation.bind(this)}/>
          )}/>

          <Match exactly pattern='/dashboard' component={UserDashboard}/>

          <Navigation />

        </section>
      </BrowserRouter>
    );
  }
}

export default App;
