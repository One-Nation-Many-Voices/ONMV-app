import React, { Component } from 'react';
import { Link } from 'react-router';

class TypesButton extends Component {
  render() {
    return (
      <article className='types-nav' id={this.props.name}>
        <Link  to={'/ONMV-frontend/types/' + this.props.navlink}>
          <h3> {this.props.name} </h3>
         </Link>
      </article>
    );
  }
}

module.exports = TypesButton;
