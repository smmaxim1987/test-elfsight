import * as React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { socials } from 'constant'

export type FooterProps = React.HTMLAttributes<HTMLElement>

function FooterRaw(props: FooterProps) {
  return <footer {...props}>
    <Box textAlign="center" p="30">
      <a href={socials.tg} target="blank"><Text>© Smirnov Maxim 2022</Text></a>
    </Box>
  </footer>
}

export const Footer = React.memo(FooterRaw)
