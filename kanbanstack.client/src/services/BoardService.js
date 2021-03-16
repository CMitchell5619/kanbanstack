import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

export default class BoardService {
  async getAllBoards() {
    try {
      const res = await api.get('api/boards')
      console.log(res)
      AppState.boards = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}

export const boardService = new BoardService()
