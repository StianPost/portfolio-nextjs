import styled from 'styled-components';

export const List = styled.li`
  list-style: none;
  text-align: right;
  margin-bottom: 8px;

  & a {
    font-size: var(--font-size-md);
    color: var(--c-text);
    & :hover {
      text-decoration: underline;
      color: var(--c-text--emphasys);
    }
  }
`;

export const Navigation = styled.div`
  position: fixed;
  top: 30%;
  right: 0;
  padding: 8px 16px 0px 8px;
  z-index: 2;

  @media (max-width: 768px) {
    top: 25px;
    right: 25px;
  }
`;
