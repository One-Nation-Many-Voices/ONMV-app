import React from 'react';
import { Link } from 'react-router';

const Browse = () => {
  return (
    <section>
      <Link id='browse-nav' to='/browse/types'>
        <h3> Browse Events by Type </h3>
       </Link>

      <Link id='browse-nav' to="/browse/topics">
        <h3> Browse Events by Topic </h3>
      </Link>

    </section>
  );
};

module.exports = Browse;
