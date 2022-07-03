import * as React from 'react'
import { Icons } from 'ui'
import { CharacterGender } from 'services/interfaces'
import { Tooltip } from '@chakra-ui/react'

export interface GenderProps {
  data: CharacterGender
}

function CharackerGenderRaw({ data }: GenderProps) {
  switch (data) {
    case CharacterGender.female:
      return (
        <Tooltip hasArrow label={CharacterGender.female}>
          <Icons.Female />
        </Tooltip>
      )
    case CharacterGender.male:
      return (
        <Tooltip hasArrow label={CharacterGender.male}>
          <Icons.Male />
        </Tooltip>
      )
    default:
      return (
        <Tooltip hasArrow label={CharacterGender.unknown}>&mdash;</Tooltip>
      )
  }
}

export const CharackerGender = React.memo(CharackerGenderRaw)