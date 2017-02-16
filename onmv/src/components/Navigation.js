import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
  return (
    <nav>
      <p> Navigation </p>
      <Link to="/"> HOME </Link>
      <Link to="/topics"> TOPICS </Link>
      <Link to="/types"> TYPES </Link>
      <Link to="/dashboard"> Dashboard </Link>
    </nav>
  );
};

module.exports = Navigation;
