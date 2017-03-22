import React from 'react';
import EventCard from '../components/EventCard';


module.exports = function renderEventCard(data) {
  return <EventCard
    key={data.id}
    id={data.id}
    party={data.political_party}
    eventType={data.event_type}
    firstName={data.rep_first_name}
    lastName={data.rep_last_name}
    district = {data.district}
    date={data.date}
    time={data.time}
    street={data.street}
    city={data.city}
    state={data.state}
    location={data.location}
  />
}