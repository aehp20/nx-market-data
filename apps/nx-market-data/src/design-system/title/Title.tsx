import { ReactNode } from 'react';
import styled from 'styled-components';

type TitleProps = {
  children: ReactNode;
};

const H1Wrapped = styled.h1`
  color: #1a1a1d;
`;

export function Title(props: TitleProps) {
  const { children } = props;

  return <H1Wrapped>{children}</H1Wrapped>;
}
