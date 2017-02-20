import React from 'react';

const Header = () => {
  return (
    <header>
    <Link id='home-nav' to='/'>
     <h1>
       <span id='name-first'>
         ONE NATION
       </span>
       <span id='name-second'>
         MANY VOICES
       </span>
     </h1>
     </Link>
   </header>
  );
};

module.exports = Header
