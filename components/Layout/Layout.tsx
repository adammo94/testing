import { Navbar } from 'components/Navbar';
import React from 'react';

import {
  Container, LayoutVariantsEnum, Wrapper,
} from './Layout.styles';

export type LayoutProps = {
  children: React.ReactNode;
  variant?: LayoutVariantsEnum;
}

export function Layout({
  children, variant,
}: LayoutProps) {
  return (
    <Wrapper>
      <Navbar />
      <Container variant={variant}>
        {children}
      </Container>
    </Wrapper>
  );
}
