import * as React from 'react'
import {
  TableProps,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Box,
  Avatar,
  Text,
} from '@chakra-ui/react'
import { Characters, ICharacter } from 'services/interfaces'
import { CharacterGender } from './character-gender'
import { parseUrl } from 'query-string'
import { Icons } from 'ui'

export interface CharactersTableProps extends TableProps {
  data: Characters.Response.GetList
  onChangePage?: (value: { page: number }) => void
  onViewCharacter?: (character: ICharacter) => void
}

export function CharactersTable({ data, onChangePage, onViewCharacter, ...props }: CharactersTableProps) {
  const handleVievCharacter = (ch: ICharacter) => onViewCharacter && onViewCharacter(ch)
  const handleChangePage = (currentPage: string) => {
    const { query: { page } } = parseUrl(currentPage)
    onChangePage && onChangePage({ page: Number(page) })
  }
  return (
    <TableContainer {...props}>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>image</Th>
            <Th>name</Th>
            <Th>status</Th>
            <Th>species</Th>
            <Th>type</Th>
            <Th>gender</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.results?.map(ch => (
            <Tr key={ch.id} onClick={() => handleVievCharacter(ch)} _hover={{ background: 'gray.50', cursor: 'pointer' }}>
              <Td>{ch.id}</Td>
              <Td><Avatar name={ch.name} src={ch.image} /></Td>
              <Td>{ch.name}</Td>
              <Td>{ch.status}</Td>
              <Td>{ch.species}</Td>
              <Td>{ch.type}</Td>
              <Td><CharacterGender data={ch.gender} /></Td>
            </Tr>
          ))}
        </Tbody>
        {Boolean(data.info.prev || data.info.next) && (
          <Tfoot>
            <Tr>
              <Td colSpan={7}>
                <Box justifyContent="space-between" alignItems="center" display="flex">
                  <Box>
                    <Text>Characters count <b>{data.info.count}</b></Text>
                  </Box>
                  <Box display="flex">
                    {!!data.info.prev && (
                      <Box pr={4}><Button onClick={() => handleChangePage(data.info.prev as string)}>Prev</Button></Box>
                    )}
                    {!!data.info.next && (
                      <Box><Button onClick={() => handleChangePage(data.info.next as string)}>Next</Button></Box>
                    )}
                  </Box>
                </Box>
              </Td>
            </Tr>
          </Tfoot>
        )}
      </Table>
    </TableContainer>
  )
}