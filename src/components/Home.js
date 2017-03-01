import React from 'react';

const Home = () => {
  return (
    <section id='home-page'>
      <h2 className='sub-header'> HOME </h2>
      <article className='home-summary'>
        <p>
        Welcome to <span id='name-first'>One Nation </span>
        <span id='name-second'>Many Voices</span>.
        This is an open source project
        created to help people find political activism events such as townhalls to make their voices
        heard on topics that matter to them.
        </p>
        <p>
        If you are interested in contributing to this project, visit the
        <a href='https://github.com/One-Nation-Many-Voices' target='_blank'> Github page. </a>
        </p>
      </article>
      <article className='tips-section'>
        <h4 id='tips-header'> Tips for Participating in Events </h4>
          <h5 className='tips-subheader'> Prepare </h5>
          <ul>
            <li> Use this application to find an event near you </li>
            <li> Prepare questions for your representative </li>
            <li> Consider inviting others to attend with you </li>
          </ul>
          <h5 className='tips-subheader'> Attend </h5>
          <ul>
            <li> Get to the event early</li>
            <li> When asking a question, remember to be polite and persistent </li>
            <li> Consider recording the event </li>
          </ul>
          <h5 className='tips-subheader'> Follow-Up </h5>
          <ul>
            <li> Share your experience on social media</li>
            <li> Consider following up via phone, email, or another event </li>
          </ul>
        <p className='tips-credit'> Suggestions summarized from <a href='https://www.indivisibleguide.com/resources-2/2017/2/11/town-hall-tips-fact-sheet' target='_blank'>Indivisible</a>
        </p>
      </article>

   </section>
  );
};

module.exports = Home;
