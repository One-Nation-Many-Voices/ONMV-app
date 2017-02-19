import React from 'react';
import EventCard from './EventCard';

const UserDashboard = () => {
  return (
    <section>
     <article id="dashboard-header">
       <h2> Welcome NAME </h2>
       <h2> Your Upcoming Events </h2>
     </article>
     <EventCard />
   </section>
  );
};

module.exports = UserDashboard;
