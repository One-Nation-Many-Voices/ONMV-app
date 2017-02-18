import React from 'react';

const UserDashboard = () => {
  return (
    <section>
      <article id="dashboard-header">
        <h2> Welcome NAME </h2>
        <h2> Your Upcoming Events </h2>
      </article>
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

module.exports = UserDashboard;
