export interface IPaginationWrap<t> {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: t[]
}
