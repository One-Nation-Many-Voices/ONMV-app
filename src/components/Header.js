import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header>
      <Link className='home-nav' to='/ONMV-frontend/'>
        <h1>
         <span className='name-first'>
           ONE NATION
         </span>
         <span className='name-second'>
           MANY VOICES
         </span>
       </h1>
     </Link>
   </header>
  );
};

module.exports = Header
