import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class ListsService {
  async create(body) {
    return await dbContext.Lists.create(body)
  }

  async delete(id) {
    return await dbContext.Lists.findByIdAndDelete(id)
  }

  async findById(id) {
    const list = await dbContext.Lists.findById(id)
    if (!list) {
      throw new BadRequest('Invalid Id')
    }
    return list
  }

  async find(query = {}) {
    return await dbContext.Lists.find(query)
  }
}

export const listsService = new ListsService()
