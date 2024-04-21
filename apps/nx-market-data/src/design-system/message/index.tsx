import { ReactNode } from 'react';
import styled from 'styled-components';

type MessageProps = {
  type?: 'error' | 'warning' | 'info' | 'success';
  children: ReactNode;
};

export function Message(props: MessageProps) {
  const { type = 'info', children } = props;

  return <Container type={type}>{children}</Container>;
}

type ErrorProps = {
  type?: 'error';
  error?: { message: string } | unknown;
};

export function Error(props: ErrorProps) {
  const { type = 'error', error } = props;

  return (
    <Message type={type}>
      {error ? error.message : 'An error has occurred'}
    </Message>
  );
}

type ContainerProps = {
  type: 'error' | 'warning' | 'info' | 'success';
};

const getColor = (type: string) => {
  if (type === 'error') {
    return 'red';
  } else if (type === 'warning') {
    return 'yellow';
  } else if (type === 'info') {
    return 'black';
  } else if (type === 'success') {
    return 'green';
  }
};

const Container = styled.div<ContainerProps>`
  border: 1px solid ${({ type }) => getColor(type)};
  padding: 8px;
  border-radius: 8px;
  font-weight: bold;
  color: ${({ type }) => getColor(type)};
`;
