import React from 'react';
import EventCard from '../components/EventCard';

module.exports = function renderEventCard(d) {
  return <EventCard
    key={d.id}
    id={d.id}
    party={d.political_party}
    eventType={d.event_type}
    firstName={d.rep_first_name}
    lastName={d.rep_last_name}
    district = {d.district}
    date={d.date}
    time={d.time}
    street={d.street}
    city={d.city}
    state={d.state}
    location={d.location}
  />
}