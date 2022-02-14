import React from 'react';
import { IconName } from 'react-icons/fa';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Contactheader,
  Contactinfo,
  Iconcontainer,
  Emailcontainer,
} from './Contact.style';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <>
      <Contactheader>
        <h2>Contact</h2>
      </Contactheader>
      <Contactinfo>
        <p>
          Here is where you can contact me, I am still an up and comming dev so
          there is not much here now, but just you wait!
        </p>
      </Contactinfo>
      <Emailcontainer>
        <FaEnvelope className='icons' />
        <p>stianpost@hotmail.com</p>
      </Emailcontainer>
      <Iconcontainer>
        <Link href='https://github.com/StianPost' passHref>
          <a>
            <FaGithub className='icons bottomIcon' />
          </a>
        </Link>
        <Link href='https://www.linkedin.com/in/stian-post-a211201b5/' passHref>
          <a>
            <FaLinkedinIn className='icons bottomIcon' />
          </a>
        </Link>
      </Iconcontainer>
    </>
  );
}

export default Contact;
