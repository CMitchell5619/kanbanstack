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

  async createBoard(newBoard) {
    try {
      const res = await api.post('api/boards', newBoard)
      AppState.boards.push(res.data)
      return res.data._id
    } catch (error) {
      logger.error(error)
    }
  }

  async getBoardById(id) {
    try {
      const res = await api.get('api/boards/' + id)
      logger.log(res)
      AppState.activeBoard = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async deleteActiveBoard(id) {
    try {
      await api.delete('api/boards/' + id)
    } catch (error) {
      logger.error(error)
    }
  }

  async deleteBoard(board) {
    await api.delete('api/boards/' + board.id)
  }
}

export const boardService = new BoardService()
