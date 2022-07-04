import * as React from 'react'
import { Wrap, Header, Footer, Main } from './style'

export interface LayoutDefaultProps extends React.HTMLAttributes<HTMLElement> { }

export function LayoutDefault({ children, ...props }: LayoutDefaultProps) {
  return (
    <Wrap {...props}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrap>
  )
}

