import styled from 'styled-components';

export const AboutHeading = styled.div`
  text-align: center;
  margin: var(--size-md) 0 var(--size) 0;
`;

export const AboutInfo = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutText = styled.div`
  width: 40%;

  h3 {
    margin-bottom: var(--size-sm);
  }
  p {
    margin-bottom: var(--size-sm);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: var(--size);
  }
`;

export const AboutImg = styled.div`
  height: 350px;
  width: 40%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
