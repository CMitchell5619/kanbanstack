import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

export default class CommentsService {
  async getAllCommentsById(id) {
    try {
      const res = await api.get('api/tasks/' + id + '/comments')
      console.log(res)
      AppState.comments[id] = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async createComment(newComment) {
    try {
      const res = await api.post('api/comments', newComment)
      console.log(res.data)
      AppState.comments[newComment.taskId].push(res.data)
      return res.data._id
    } catch (error) {
      logger.error(error)
    }
  }

  async deleteComments(comment) {
    try {
      await api.delete('api/comments/' + comment._id)
      this.getAllCommentsById(comment.taskId)
    } catch (error) {

    }
  }
}

export const commentsService = new CommentsService()
