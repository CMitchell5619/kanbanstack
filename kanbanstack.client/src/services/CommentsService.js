import { api } from './AxiosService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

export default class CommentsService {
  async getAllComments() {
    try {
      const res = await api.get('api/comments')
      console.log(res)
      AppState.boards = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async createComment(newComment) {
    try {
      const res = await api.post('api/comments', newComment)
      AppState.comments.push(res.data)
      return res.data._id
    } catch (error) {
      logger.error(error)
    }
  }
}

export const commentsService = new CommentsService()
