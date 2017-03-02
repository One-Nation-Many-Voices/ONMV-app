import React, { Component } from 'react';

class Calendar extends Component {
  
  componentDidMount() {
    this.addLink()
  }
  
  addLink() {
    if (window.addtocalendar)if(typeof window.addtocalendar.start == "function")return;
    if (window.ifaddtocalendar == undefined) { window.ifaddtocalendar = 1;
        var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
        s.type = 'text/javascript';s.charset = 'UTF-8';s.async = true;
        s.src = ('https:' == window.location.protocol ? 'https' : 'http')+'://addtocalendar.com/atc/1.5/atc.min.js';
        var h = d[g]('body')[0];h.appendChild(s);
  }}
  
  
  render() {
    const {date, time, location, eventType, firstName, lastName} = this.props

    let dateTime = date + ' ' + time
    let eventTitle = eventType + ' with ' + firstName + ' ' + lastName
    return (
    
    <span className="addtocalendar atc-style-button-icon">
        <var className="atc_event">
            <var className="atc_date_start">{dateTime}</var>
            <var className="atc_date_end">{dateTime}</var>
            <var className="atc_timezone">America/Denver</var>
            <var className="atc_title">{eventTitle}</var>
            <var className="atc_location">{location}</var>
        </var>
    </span>


    );
  };
}
module.exports = Calendar;











