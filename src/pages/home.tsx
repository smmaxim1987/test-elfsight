import * as React from 'react'
import { charactersModel, CharactersTable } from 'features/characters'
import { useStore } from 'effector-react'
import { Loading } from 'ui'

export function HomePage() {
  const characters = useStore(charactersModel.$characters)
  const isLoading = useStore(charactersModel.getCharactersFx.pending)

  React.useEffect(() => {
    void charactersModel.getCharactersFx({})
  }, [])

  if (isLoading) return <Loading />
  return characters && <CharactersTable data={characters} />
}
