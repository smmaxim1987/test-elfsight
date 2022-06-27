import { createStore, createEvent } from 'effector'

export const state = createStore<number>(0)
export const addCounter = createEvent()

state.on(addCounter, (prevState) => prevState + 1)
