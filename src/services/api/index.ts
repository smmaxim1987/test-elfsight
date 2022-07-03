import axios from 'axios'
export * from './characters'

export const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
})

api.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)