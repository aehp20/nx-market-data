import styled from 'styled-components';

export const Link = styled.a`
  &:link {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }

  &:visited {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }

  &:hover {
    text-decoration: underline;
  }

  &:active {
    text-decoration: underline;
  }
`;
