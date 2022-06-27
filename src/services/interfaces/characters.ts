import { IPaginationWrap } from '.'

export interface ICharacter {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
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
      pages?: number
      next?: string
      prev?: string
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
