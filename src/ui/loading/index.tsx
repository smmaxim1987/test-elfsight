import * as React from 'react'
import { Box, CircularProgress, BoxProps } from "@chakra-ui/react";

export interface LoadingProps extends BoxProps { }

export function Loading(props: LoadingProps) {
  return (
    <Box textAlign="center" padding="24" {...props}><CircularProgress color='green.300' isIndeterminate /></Box>
  )
}