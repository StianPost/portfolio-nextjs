import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Body from '../components/body/Body';
import Main from '../components/main/Main';
import Header from '../components/header/Header';
import HeroBanner from '../components/heroBanner/HeroBanner';
import Navbar from '../components/nav/NavBar';
import Skills from '../components/skills/Skills';
import About from '../components/about/About';
import Projects from '../components/projects/Projects';

export default function Home() {
  return (
    <>
      <Body>
        <Header />
        <Navbar />
        <Main>
          <HeroBanner />
          <Skills />
          <About />
          <Projects />
        </Main>
      </Body>
    </>
  );
}
