import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

export default class ListsService {
  async getAllListsById(id) {
    try {
      const res = await api.get('api/boards/' + id + '/lists')
      console.log(res)
      AppState.lists = res.data
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

  async deleteList(list) {
    try {
      await api.delete('api/lists/' + list._id)
      this.getAllListsById(list.boardId)
    } catch (error) {
      logger.log(error)
    }
  }
}

export const listsService = new ListsService()
