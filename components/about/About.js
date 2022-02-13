import React from 'react';
import { AboutHeading, AboutInfo, AboutText, AboutImg } from './About.style';

function About() {
  return (
    <>
      <AboutHeading>
        <h2 id='about'>About</h2>
      </AboutHeading>
      <AboutInfo>
        <AboutImg style={{ backgroundImage: `url(/avataaars.png)` }} />
        <AboutText>
          <h3>This is me!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AboutText>
      </AboutInfo>
    </>
  );
}

export default About;
