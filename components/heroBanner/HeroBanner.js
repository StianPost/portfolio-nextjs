import React from 'react';
import { Hero, HeroPost } from './HeroBanner.Style';

function HeroBanner() {
  return (
    <Hero>
      <h1 id='intro'>
        Welcome to my <HeroPost>Post</HeroPost>folio
      </h1>
      <p>
        Here is my portfolio, you will find about me and all my amazing
        attributes, a few of my older projects are on here along with my skills
        and expertiese, hope you enjoy your time here.
      </p>
    </Hero>
  );
}

export default HeroBanner;
