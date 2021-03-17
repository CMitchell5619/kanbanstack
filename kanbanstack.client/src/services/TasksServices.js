import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

export default class TasksService {
  async getAllTasksById(id) {
    try {
      const res = await api.get('api/lists/' + id + '/tasks')
      console.log(res)
      AppState.tasks[id] = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async createTask(newTask) {
    try {
      const res = await api.post('api/tasks', newTask)
      AppState.tasks.push(res.data)
      return res.data._id
    } catch (error) {
      logger.error(error)
    }
  }
}

export const tasksService = new TasksService()
