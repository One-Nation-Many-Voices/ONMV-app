import React from 'react';
import { Link } from 'react-router';

const Browse = () => {
  return (
    <section >

      <article className='browse-nav'>
        <Link  to='/browse/types'>
          <h3> Browse Events by Type </h3>
         </Link>
      </article>

      <article className='browse-nav'>
        <Link to="/browse/topics">
        <h3> Browse Events by Topic </h3>
        </Link>
      </article>

    </section>
  );
};

module.exports = Browse;
