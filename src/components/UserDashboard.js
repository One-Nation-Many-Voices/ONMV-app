import React from 'react';
import EventCard from './EventCard';

const UserDashboard = () => {
  return (
    <section>
      <h2 className='sub-header'> DASHBOARD </h2>
     <article id="dashboard-header">
       <h2> Welcome NAME </h2>
       <h2> Your Upcoming Events </h2>
     </article>
     <EventCard />
   </section>
  );
};

module.exports = UserDashboard;
