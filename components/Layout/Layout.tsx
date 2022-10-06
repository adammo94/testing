import React from 'react'
import { Container, Wrapper } from './Layout.styles'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Container>
        {children}
      </Container>
    </Wrapper>
  )
}