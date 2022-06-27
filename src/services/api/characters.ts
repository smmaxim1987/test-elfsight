import { api } from '.'
import { Characters } from 'services/interfaces'

export const charactersAPI = {
  // Get all characters
  getList: (params: Characters.Request.GetList): Promise<Characters.Response.GetList> => api.get('/character', { params }),
  // Get a single character
  getCharacter: ({ id, ...params }: Characters.Request.GetCharacter): Promise<Characters.Response.GetCharacter> => api.get(`character/${id}`, { params })
}
