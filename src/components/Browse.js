import React, {Component} from 'react';
import BrowseButton from './BrowseButton';

class Browse extends Component {
  render(){
    return (
      <section >
        <BrowseButton navlink={'types'} name={'Types'}/>
        <BrowseButton navlink={'topics'} name={'Topics'}/>
      </section>
    );
  }
}

module.exports = Browse;
