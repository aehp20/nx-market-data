import { ReactNode } from 'react';
import styled from 'styled-components';

type TitleProps = {
  children: ReactNode;
};

const TitleWrapped = styled.h2`
  color: #1a1a1d;
`;

export function Title(props: TitleProps) {
  const { children } = props;

  return <TitleWrapped>{children}</TitleWrapped>;
}
