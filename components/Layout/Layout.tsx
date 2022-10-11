import { Navbar } from 'components/Navbar';
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
      <Navbar />
      <Container>
        {children}
      </Container>
    </Wrapper>
  );
}
