import { createStore, createEffect, forward, createEvent, sample } from 'effector'
import { charactersAPI } from 'services/api'
import { Characters } from 'services/interfaces'

// Effects
export const getCharactersFx = createEffect(charactersAPI.getList)

// Events
export const changeParams = createEvent<Characters.Request.GetList>()
export const resetParams = createEvent()
export const resetCharacters = createEvent()

// Store
export const $characters = createStore<Characters.Response.GetList | null>(null).reset(resetCharacters)
const $params = createStore<Characters.Request.GetList>({}).reset(resetParams)

// Logic
forward({ from: getCharactersFx.doneData, to: $characters })
forward({ from: changeParams, to: $params })

sample({
  clock: $params,
  source: $params,
  target: getCharactersFx,
})