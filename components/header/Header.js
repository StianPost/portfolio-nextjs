import { Wrapper, LogoContainer } from './HeaderStyles';
import Image from 'next/image';
import Link from 'next/link';
import LogoImg from '../../assets/img/Postal_Logo.png';

function Header() {
  return (
    <Wrapper>
      <Link href='/' passHref>
        <LogoContainer>
          <Image src={LogoImg} alt='My amazing logo' />
        </LogoContainer>
      </Link>
    </Wrapper>
  );
}

export default Header;
