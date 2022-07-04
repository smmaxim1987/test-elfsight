import * as React from 'react'
import { Box, BoxProps, Text } from "@chakra-ui/react";

export interface EmptyProps extends BoxProps { }

export function Empty({ children, ...props }: EmptyProps) {
  return (
    <Box textAlign="center" padding="24" {...props}>
      {children ? children : <Text fontWeight={'bold'}>Ничего не найдено</Text>}
    </Box>
  )
}