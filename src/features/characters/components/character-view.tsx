import * as React from 'react'
import { Box, Image } from '@chakra-ui/react'
import { ICharacter } from 'services/interfaces'
import { CharacterGender } from 'features/characters'

export type CharacterViewProps = ICharacter

export function CharacterView({ ...character }: CharacterViewProps) {
  return (
    <Box>
      <Box display="flex" flexDirection="column" pb={4}>
        <Box>
          <Image src={character.image} alt={character.name} />
        </Box>
        <Box mt={3}>
          <b>Name:</b> {character.name}
        </Box>
        <Box mt={3}>
          <Box display='flex' alignItems='center'>
            <Box><b>Sex:</b> {character.gender}</Box>
            <Box ml={1}>
              <CharacterGender data={character.gender} />
            </Box>
          </Box>
        </Box>
        <Box mt={3}>
          <b>Status:</b> {character.status}
        </Box>
        {character.type && (
          <Box mt={3}>
            <b>Type:</b> {character.type}
          </Box>
        )}
        <Box mt={3}>
          <b>Location:</b> {character?.location?.name}
        </Box>
        <Box mt={3}>
          <b>Gender:</b> {character.gender}
        </Box>
      </Box>
      {/* {JSON.stringify(character)} */}
    </Box>
  )
}