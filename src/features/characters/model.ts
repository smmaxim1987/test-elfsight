import { createStore, createEffect, forward, createEvent, sample } from 'effector'
import { charactersAPI } from 'services/api'
import { Characters, ICharacter } from 'services/interfaces'
import omitEmpty from 'omit-empty'
import { debounce } from 'patronum/debounce'

// Effects
export const getCharactersFx = createEffect(charactersAPI.getList)
export const getCharacterFx = createEffect(charactersAPI.getCharacter)

// Events
export const onChangeParams = createEvent<Characters.Request.GetList>()
export const onResetParams = createEvent()
export const onResetCharacters = createEvent()
export const onResetCharacter = createEvent()

// Store
export const $characters = createStore<Characters.Response.GetList | null>(null).reset(onResetCharacters)
export const $character = createStore<ICharacter | null>(null).reset(onResetCharacter)
export const $params = createStore<Characters.Request.GetList>({}).reset(onResetParams).on(onChangeParams, (state, payload) => omitEmpty({ ...state, ...payload }))


// Logic
forward({ from: getCharactersFx.doneData, to: $characters })
forward({ from: getCharacterFx.doneData, to: $character })

sample({
  clock: [debounce({ source: onChangeParams, timeout: 500 })],
  source: $params,
  target: getCharactersFx,
})

getCharactersFx.failData.watch(e => console.log(e))