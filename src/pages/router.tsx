import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LayoutDefault } from 'layouts'
import { paths } from 'constant'
import { HomePage } from './'
import { ChakraProvider } from '@chakra-ui/react'

const routers = [
  { path: paths.home(), element: <HomePage /> },
]

export function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <LayoutDefault>
          <Routes>
            {routers.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Routes>
        </LayoutDefault>
      </BrowserRouter>
    </ChakraProvider>
  )
}
