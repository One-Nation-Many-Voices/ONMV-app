import React, { Component } from 'react';
import { Link } from 'react-router';

class BrowseButton extends Component {
  render() {
    return (
      <article className='browse-nav'>
        <Link  to={'/browse/' + this.props.navlink}>
          <h3> Browse Events by Type </h3>
         </Link>
      </article>
    );
  }
}

module.exports = BrowseButton;
