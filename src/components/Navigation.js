import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
  return (
    <nav id='navigation-container'>
      <Link id='home-nav' to='/'>
        <img src="./icons/home-icon.svg" alt='home icon'/>
       </Link>

      <Link id="all-nav" to="/all">
        <img src="./icons/grid-icon.svg" alt='grid icon'/>
      </Link>

      <Link id="browse-nav" to="/types">
      <img src="./icons/search-icon.svg" alt='search icon'/>
      </Link>

      <Link id="location-nav" to="/location">
        <img src="./icons/location-icon.svg" alt='location icon'/>
      </Link>

    </nav>
  );
};

module.exports = Navigation;
