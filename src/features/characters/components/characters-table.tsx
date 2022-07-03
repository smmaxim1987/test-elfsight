import * as React from 'react'
import {
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
  Image,
  Text,
} from '@chakra-ui/react'
import { Characters } from 'services/interfaces'
import { CharackerGender } from './character-gender'
import { parseUrl } from 'query-string'
import { charactersModel } from 'features/characters'

export interface CharactersTableProps extends React.HTMLAttributes<HTMLElement> {
  data: Characters.Response.GetList
}

export function CharactersTable({ data, ...props }: CharactersTableProps) {
  const handleChangePage = (currentPage: string) => {
    const { query: { page } } = parseUrl(currentPage)
    page && charactersModel.changeParams({ page: Number(page) })
  }

  return (
    <TableContainer>
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
            <Tr key={ch.id}>
              <Th>{ch.id}</Th>
              <Th><Image alt={ch.name} src={ch.image} objectFit='cover' boxSize='80px' /></Th>
              <Th>{ch.name}</Th>
              <Th>{ch.status}</Th>
              <Th>{ch.species}</Th>
              <Th>{ch.type}</Th>
              <Th><CharackerGender data={ch.gender} /></Th>
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