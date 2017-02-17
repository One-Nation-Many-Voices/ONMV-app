import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
  return (
    <nav id='navigation-container'>

      <Link id='home-nav' to='/'>
        <img src="./icons/home-icon.svg"/>
        <h4>HOME</h4>
       </Link>

      <Link id="browse-nav" to="/browse">
        <img src="./icons/grid-icon.svg"/>
        <h4>BROWSE</h4>
      </Link>

      <Link id="browse-nav" to="/browse">
        <img src="./icons/location-icon.svg"/>
        <h4>LOCATION</h4>
      </Link>

      <Link id="dashboard-nav" to="/dashboard">
        <img src="./icons/person-icon.svg"/>
        <h4>DASHBOARD</h4>
      </Link>

    </nav>
  );
};

module.exports = Navigation;
