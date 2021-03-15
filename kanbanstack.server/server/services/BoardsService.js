import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BoardsService {
  async create(body) {
    return await dbContext.Boards.create(body)
  }

  async delete(id) {
    return await dbContext.Boards.findByIdAndDelete(id)
  }

  async findById(id) {
    const board = await dbContext.Boards.findById(id)
    if (!board) {
      throw new BadRequest('Invalid Id')
    }
    return board
  }

  async find(query = {}) {
    return await dbContext.Boards.find(query)
  }
}

export const boardsService = new BoardsService()
