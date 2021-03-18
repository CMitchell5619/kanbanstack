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
      AppState.tasks[newTask.listId].push(res.data)
      return res.data._id
    } catch (error) {
      logger.error(error)
    }
  }

  async deleteTask(task) {
    try {
      await api.delete('api/tasks/' + task._id)
      this.getAllTasksById(task.listId)
    } catch (error) {
      logger.error(error)
    }
  }

  async changeListIdForTask(task, listId) {
    try {
      await api.put('api/tasks/' + task.id, { listId })
      this.getAllTasksById(task.listId)
      this.getAllTasksById(listId)
      // go get tasks for new listIdthis
      // go get tasks for Old listId (task)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const tasksService = new TasksService()
