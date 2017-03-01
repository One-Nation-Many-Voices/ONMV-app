import React from 'react';

module.exports = function filterSearch(d, searchString) {
  let results = d.event_type + d.political_party +
  d.rep_first_name + d.rep_last_name + d.district +
  d.date + d.time + d.street + d.city + d.state + d.location
  return results.toLowerCase().includes(searchString.toLowerCase())
}
