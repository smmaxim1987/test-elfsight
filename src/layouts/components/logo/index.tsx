import * as React from 'react'
import { Box, Image } from '@chakra-ui/react'
import logo from './img/logo.png'

export function Logo() {
  return (
    <Image src={logo} height="32" objectFit='contain' alt='logo' />
  )
}