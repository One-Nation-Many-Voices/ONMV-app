import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
  return (
    <nav id='navigation-container'>
      <Link id='home-nav' to='/'>
        <img src="./icons/home-icon.svg"/>
       </Link>
      <Link id="topics-nav" to="/topics">
        <img src="./icons/grid-icon.svg"/>
      </Link>
      <Link id="types-nav" to="/types">
        <img src="./icons/location-icon.svg"/>
      </Link>
      <Link id="dashboard-nav" to="/dashboard">
        <img src="./icons/person-icon.svg"/>
      </Link>
    </nav>
  );
};

module.exports = Navigation;
