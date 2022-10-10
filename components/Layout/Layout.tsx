import React from 'react';

import {
  Container, Wrapper,
} from './Layout.styles';

type LayoutProps = {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <Container>
        {children}
      </Container>
    </Wrapper>
  );
}
