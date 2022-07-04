import * as React from 'react'
import { charactersModel, CharactersTable, CharacterView, CharacterFilters } from 'features/characters'
import { ICharacter, Characters } from 'services/interfaces'
import { useStore } from 'effector-react'
import { Box } from '@chakra-ui/react'
import { Loading, Modal, Empty } from 'ui'

export function HomePage() {
  const characters = useStore(charactersModel.$characters)
  const character = useStore(charactersModel.$character)
  const params = useStore(charactersModel.$params)
  const isCharactersLoading = useStore(charactersModel.getCharactersFx.pending)
  const isCharacterLoading = useStore(charactersModel.getCharacterFx.pending)
  const handleCloseVievCharacter = () => charactersModel.onResetCharacter()
  const handleViewCharacter = ({ id }: ICharacter) => charactersModel.getCharacterFx({ id })
  const handleChangeFilter = (value: Characters.Request.GetList) => charactersModel.onChangeParams({ ...value, page: 1 })

  React.useEffect(() => {
    void charactersModel.getCharactersFx({})
  }, [])

  console.log(characters)

  return (
    <>
      <Box pl={6} pr={6} pb={6}>
        <CharacterFilters onChangeFilter={handleChangeFilter} values={params} />
      </Box>
      {isCharactersLoading ? (
        <Loading />
      ) : (characters && characters?.results?.length > 0 ? (
        <CharactersTable data={characters} onChangePage={charactersModel.onChangeParams} onViewCharacter={handleViewCharacter} />
      ) : <Empty />
      )}
      <Modal isOpen={Boolean(character)} title={character?.name || ''} onClose={handleCloseVievCharacter}>
        {isCharacterLoading && <Loading />}
        {character && <CharacterView {...character} />}
      </Modal>
    </>
  )
}
