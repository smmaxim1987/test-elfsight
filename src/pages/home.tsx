import * as React from 'react'
import { exampleFeature } from 'model'
import { useStore } from 'effector-react'
import { Button } from '@chakra-ui/react'

export function HomePage() {
  const counter = useStore(exampleFeature.state)
  return (
    <>
      <h1>Hello World!</h1>
      <p>
        current count <b>{counter}</b>
      </p>
      <Button onClick={() => exampleFeature.addCounter()}>Click me</Button>
    </>
  )
}
