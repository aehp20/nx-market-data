import { ReactNode } from 'react';
import { useTitle } from 'react-use';

import { Title } from '../title';

type PageProps = {
  children: ReactNode;
  title: string;
};

export function Page(props: PageProps) {
  const { children, title } = props;

  useTitle(title);

  return (
    <>
      <header>
        <Title>{title}</Title>
      </header>
      <main>{children}</main>
    </>
  );
}
