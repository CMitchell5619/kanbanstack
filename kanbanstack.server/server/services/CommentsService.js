import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CommentsService {
  async create(body) {
    return await dbContext.Comments.create(body)
  }

  async delete(id) {
    return await dbContext.Comments.findByIdAndDelete(id)
  }

  async findById(id) {
    const comment = await dbContext.Comments.findById(id)
    if (!comment) {
      throw new BadRequest('Invalid Id')
    }
    return comment
  }

  async find(query = {}) {
    return await dbContext.Comments.find(query)
  }
}

export const commentsService = new CommentsService()
