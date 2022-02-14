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
            Hello there, my name is Stian Post, I am a front end developer. I am
            still learning and will be updating this site as I go. Right now I
            am studying on Noroff, it being my second year, while trying to get
            a developer job on the side. Though I can do design, I am more
            skilled in the programming department. I really enjoy coding in
            Javascript, and am now learning how to properly utilize
            React/NextJS.
          </p>
          <p>
            For those of you who is wondering, on the free time I enjoy working
            out and cooking. Not even I can sit infront of a computer screen
            24/7.
          </p>
        </AboutText>
      </AboutInfo>
    </>
  );
}

export default About;
