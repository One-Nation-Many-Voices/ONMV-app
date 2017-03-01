import displayMessageNoEvents from '../src/functions/displayMessageNoEvents';
import getDirections from '../src/functions/getDirections';
import filterSearch from '../src/functions/filterSearch';
import renderEventCard from '../src/functions/renderEventCard';
import { assert, expect } from 'chai';
import MockData from '../mock-data';
import React from 'react';

describe('displayMessageNoEvents', function() {
  let noData = []
  let data = MockData

  it('displays a message when there is no data', function() {
    let message = displayMessageNoEvents(noData);
    expect(message).to.eql('No Events Matching the Type and/or Location Selected');
  });

  it('does not display a message when there is data', function() {
    let message = displayMessageNoEvents(data);
    expect(message).to.eql('')
  });
});

describe('getDirections', function() {
  let location = 'Grace Church'
  let state = 'AL'
  let city = 'Mobile'
  let directionsURL = `https://www.google.com/maps/place/+${location}+${city}+${state}`
  let link = <a className='address-icon' target='_blank' href={directionsURL}></a>

  it('should an link tag if a location is passed in', function() {
    let directions = getDirections(location, state, city);
    expect(directions).to.eql(link);
  })
})

describe('filterSearch', function() {
  let data = MockData[0]
      
  it('should return the data if the search string is included', function() {
    let result = filterSearch(data, 'Town Hall');
    expect(result).to.eql(true);
  });
    
  it('should return the data regardless of upper or lowercase search', function() {
    let result = filterSearch(data, 'GARY');
    expect(result).to.eql(true);
    
    result = filterSearch(data, 'gary');
    expect(result).to.eql(true);
  });
    
  it('should not return the data if the search string is not found in the data', function() {
    let result = filterSearch(data, 'REALLYLONGWORDTHATDOESNTEXIST');
    expect(result).to.eql(false);
  });
});

describe('renderEventCard', function() {
  let data = MockData[0]
  let eventCard = renderEventCard(data);
  let properties = Object.keys(eventCard.props)
  
  it('should return an object', function() {
    expect(eventCard).to.be.a('object');
  })
  
  it('should include data properties', function() {
    expect(properties).to.include('id');
    expect(properties).to.include('id')
    expect(properties).to.include('party')
    expect(properties).to.include('eventType')
    expect(properties).to.include('firstName')
    expect(properties).to.include('lastName')
    expect(properties).to.include('district')
    expect(properties).to.include('date')
    expect(properties).to.include('time')
    expect(properties).to.include('street')
    expect(properties).to.include('city')
    expect(properties).to.include('state')
    expect(properties).to.include('location')
  })
})
