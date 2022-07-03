import * as React from 'react'
import { Logo } from 'layouts'
import { Box, BoxProps } from '@chakra-ui/react'

export type HeaderProps = BoxProps

function HeaderRaw(props: HeaderProps) {
  return (
    <Box as="header" display="flex" justifyContent="center" {...props}>
      <Logo />
    </Box>
  )
}

export const Header = React.memo(HeaderRaw)
