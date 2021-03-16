import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

export default class ListsService {
  async getAllLists() {
    try {
      const res = await api.get('api/lists')
      console.log(res)
      AppState.boards = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async createList(newList) {
    try {
      const res = await api.post('api/lists', newList)
      AppState.lists.push(res.data)
      return res.data._id
    } catch (error) {
      logger.error(error)
    }
  }
}

export const listsService = new ListsService()
