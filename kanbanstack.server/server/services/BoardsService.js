import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BoardsService {
  async find(query = {}) {
    const boards = await dbContext.Boards.find(query)
    return boards
  }

  async findById(id) {
    const board = await dbContext.Boards.findById(id)
    if (!board) {
      throw new BadRequest('Invalid Id')
    }
    return board
  }
}

export const boardsService = new BoardsService()
