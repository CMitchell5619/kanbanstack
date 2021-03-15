import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { commentsService } from '../services/CommentsService'

export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
    // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .post('', this.create)
      .delete('/:id', this.delete)
      // .put('/:id', this.edit)
  }

  // async edit(req, res, next) {
  //   try {
  //     res.send(await commentsService.edit(req.params.id, req.body))
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async delete(req, res, next) {
    try {
      res.send(await commentsService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      return res.send(await commentsService.find(req.query))
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      return res.send(await commentsService.findById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.userInfo.id
      res.send(201, await commentsService.create(req.body))
    } catch (error) {
      next(error)
    }
  }
}
