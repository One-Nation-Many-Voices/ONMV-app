import React from 'react';

module.exports = function getDirections(location, state, city) {
  if (location !== '' || location !== null) {
    let directionsURL = `https://www.google.com/maps/place/+${location}+${city}+${state}`
    return <a className='address-icon' target='_blank' href={directionsURL}></a>
  }
  else {
    return null
  };
};
