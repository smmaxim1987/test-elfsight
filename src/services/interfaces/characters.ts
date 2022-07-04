import { IPaginationWrap } from '.'

export enum CharacterGender {
  female = 'Female',
  male = 'Male',
  unknown = 'Unknown',
}

export enum CharacterSpecies {
  human = 'human',
  alien = 'alien',
}

export enum CharacterStatus {
  alive = 'alive',
  dead = 'dead',
  unknown = 'unknown'
}
export interface ICharacter {
  id: number
  name: string
  status: CharacterStatus
  species: CharacterSpecies
  type: string
  gender: CharacterGender
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

export namespace Characters {
  export namespace Request {
    export interface GetList {
      count?: number
      page?: number
      next?: string
      prev?: string
      name?: string
      status?: CharacterStatus
      species?: CharacterSpecies
      type?: string
      gender?: CharacterGender
    }
    export interface GetCharacter {
      id: number
    }
  }
  export namespace Response {
    export type GetList = IPaginationWrap<ICharacter>
    export type GetCharacter = ICharacter
  }
}
