import styled from 'styled-components';

export const Hero = styled.div`
  margin: auto;
  margin-top: 108px;
  text-align: center;
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 400px) {
    h1 {
      font-size: var(--font-size-xl);
    }
  }
`;

export const HeroPost = styled.span`
  color: var(--c-text--emphasys);
`;
