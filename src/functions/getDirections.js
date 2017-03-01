module.exports = function getDirections(location, state, city) {
  if (location !== '' || location !== null) {
    let directionsURL = `https://www.google.com/maps/place/+${location}+${city}+${state}`
    return <a className='directions' target='_blank' href={directionsURL} >Directions</a>
  }
  else {
    return null
  };
};
