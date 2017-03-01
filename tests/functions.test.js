import displayMessageNoEvents from '../src/functions/displayMessageNoEvents';
import getDirections from '../src/functions/getDirections';
import { assert, expect } from 'chai';
import MockData from '../mock-data';
import React from 'react';

describe('displayMessageNoEvents', function() {
  let noData = []
  let data = MockData

  it('displays a message when there is no data', function() {
    let message = displayMessageNoEvents(noData);
    expect(message).to.eql('No Events Matching the Type and/or Location Selected')
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
    let directions = getDirections(location, state, city)
    expect(directions).to.eql(link)
  })
})
