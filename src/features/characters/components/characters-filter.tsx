import * as React from 'react'
import {
  Box,
  Flex,
  BoxProps,
  Input,
  Select,
} from "@chakra-ui/react"
import { Characters, CharacterStatus, CharacterSpecies, CharacterGender } from 'services/interfaces'

export interface CharacterFiltersProps extends BoxProps {
  values: Characters.Request.GetList,
  onChangeFilter: (value: Characters.Request.GetList) => void
}

export function CharacterFilters({ values, onChangeFilter, ...props }: CharacterFiltersProps) {
  return (
    <Flex gap='2' {...props}>
      <Box>
        <Input
          placeholder='Search by name'
          onChange={({ currentTarget: { value: name } }) => onChangeFilter({ name })}
          value={values?.name || ''}
        />
      </Box>
      <Box>
        <Input
          placeholder='Search by type'
          onChange={({ currentTarget: { value: type } }) => onChangeFilter({ type })}
          value={values?.type || ''}
        />
      </Box>
      <Box>
        <Select
          placeholder='Select status'
          value={values.status || ''}
          onChange={({ currentTarget: { value } }) => onChangeFilter({ status: value as CharacterStatus })}
        >
          {Object.keys(CharacterStatus).map(key => <option key={key} value={key}>{key}</option>)}
        </Select>
      </Box>
      <Box>
        <Select
          placeholder='Select species'
          value={values.species || ''}
          onChange={({ currentTarget: { value } }) => onChangeFilter({ species: value as CharacterSpecies })}
        >
          {Object.keys(CharacterSpecies).map(key => <option key={key} value={key}>{key}</option>)}
        </Select>
      </Box>
      <Box>
        <Select
          placeholder='Select gender'
          value={values.gender || ''}
          onChange={({ currentTarget: { value } }) => onChangeFilter({ gender: value as CharacterGender })}
        >
          {Object.keys(CharacterGender).map(key => <option key={key} value={key}>{key}</option>)}
        </Select>
      </Box>
    </Flex>
  )
}