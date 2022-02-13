import React from 'react';
import { List, Navigation } from './Navbar.style';
import Link from 'next/link';

function Navbar() {
  const navArray = [
    {
      id: 0,
      title: 'Home',
      link: '/',
    },
    {
      id: 1,
      title: 'Skills',
      link: '#skills',
    },
    {
      id: 2,
      title: 'About',
      link: '#about',
    },
    {
      id: 3,
      title: 'Projects',
      link: '#projects',
    },
    {
      id: 4,
      title: 'Contact',
      link: '#contact',
    },
  ];
  return (
    <Navigation>
      <ul>
        {navArray.map(({ id, title, link }) => (
          <List key={id}>
            <Link href={link} passHref>
              {title}
            </Link>
          </List>
        ))}
      </ul>
    </Navigation>
  );
}

export default Navbar;
