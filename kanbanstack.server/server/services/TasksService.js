import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class TasksService {
  async create(body) {
    return await dbContext.Tasks.create(body)
  }

  async delete(id) {
    return await dbContext.Tasks.findByIdAndDelete(id)
  }

  async findById(id) {
    const task = await dbContext.Tasks.findById(id)
    if (!task) {
      throw new BadRequest('Invalid Id')
    }
    return task
  }

  async find(query = {}) {
    return await dbContext.Tasks.find(query)
  }

  async edit(id, update) {
    const task = await dbContext.Tasks.findOneAndUpdate({ _id: id }, update, {
      new: true
    })
    if (!task) {
      throw new BadRequest('Invalid ID')
    }
    return task
  }
}

export const tasksService = new TasksService()
