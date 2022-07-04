import * as React from 'react'
import { Icons } from 'ui'
import { CharacterGender as CharacterGenderEnum } from 'services/interfaces'
import { Tooltip, Box } from '@chakra-ui/react'

export interface GenderProps {
  data: CharacterGenderEnum
}

function CharacterGenderRaw({ data }: GenderProps) {
  switch (data) {
    case CharacterGenderEnum.female:
      return <Icons.Female />
    case CharacterGenderEnum.male:
      return <Icons.Male />
    default:
      return <>&mdash;</>
  }
}

export const CharacterGender = React.memo(CharacterGenderRaw)