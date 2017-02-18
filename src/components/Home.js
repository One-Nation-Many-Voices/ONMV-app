import React from 'react';

const Home = () => {
  return (
    <section>
      <article className='home-card'>

        <h3> Event Title </h3>
        <button> + </button>
        <h5>
          <span> Event Date </span>
          <span> Event Time </span>
        </h5>
        <p> Description of Event </p>
        <label>
          WR
        </label>
      </article>

    </section>
  );
};

module.exports = Home;
