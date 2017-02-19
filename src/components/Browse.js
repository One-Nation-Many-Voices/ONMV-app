import React, {Component} from 'react';
import { Link } from 'react-router';
import BrowseButton from './BrowseButton';

class Browse extends Component {
  render(){
    return (
      <section >
        <BrowseButton navlink={'types'}/>
        <BrowseButton navlink={'topics'}/>
      </section>
    );
  }
}

module.exports = Browse;
