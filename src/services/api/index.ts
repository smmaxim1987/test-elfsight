import axios from 'axios'
export * from './characters'
import { toast } from 'react-toastify'

export const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
})

api.interceptors.response.use(
  response => response.data,
  error => error
)