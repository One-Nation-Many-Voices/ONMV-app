import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
  return (
    <nav id='navigation-container'>
      <Link id='home-nav' to='/'>
        <img src="./icons/home-icon.svg"/>
       </Link>

      <Link id="browse-nav" to="/browse">
        <img src="./icons/grid-icon.svg"/>
      </Link>

      <Link id="location-nav" to="/location">
        <img src="./icons/location-icon.svg"/>
      </Link>

      <Link id="dashboard-nav" to="/dashboard">
        <img src="./icons/person-icon.svg"/>
      </Link>

    </nav>
  );
};

module.exports = Navigation;
