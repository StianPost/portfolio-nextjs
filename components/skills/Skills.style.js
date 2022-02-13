import styled from 'styled-components';

export const SkillsHeading = styled.div`
  text-align: center;
  margin: var(--size-md) 0 var(--size) 0;
`;

export const SkillsSubHead = styled.div``;

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media (max-width: 540px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SkillsCard = styled.div`
  background: var(--c-bg--secondary);
  text-align: center;
  width: 25%;
  padding: var(--size);
  box-shadow: inset 5px 4px 4px 2px #000000c2;
  min-width: 250px;
  margin-bottom: var(--size);

  p {
    margin-bottom: var(--size-sm);
  }

  h4 {
    margin: var(--size) 0;
  }

  @media (max-width: 540px) {
    width: 90%;
  }
`;
