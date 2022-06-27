import * as React from 'react'

export type FooterProps = React.HTMLAttributes<HTMLElement>

function FooterRaw(props: FooterProps) {
  return <footer {...props}>footer</footer>
}

export const Footer = React.memo(FooterRaw)
