import styled from 'styled-components';

export const Contactheader = styled.div`
  text-align: center;
  margin: var(--size-md) 0 var(--size) 0;
`;

export const Contactinfo = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
  margin-bottom: var(--size);
`;

export const Emailcontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin-left: var(--size-sm);
  }
`;

export const Iconcontainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: var(--size-sm);
  margin-bottom: var(--size);
`;
