import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { boardsService } from '../services/BoardsService'

export class BoardsController extends BaseController {
  constructor() {
    super('api/boards')
    this.router
    // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .post('', this.create)
      .delete('/:id', this.delete)
      .get('/:id', this.getOne)
      // .put('/:id', this.edit)
  }

  // async edit(req, res, next) {
  //   try {
  //     res.send(await boardsService.edit(req.params.id, req.body))
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async delete(req, res, next) {
    try {
      res.send(await boardsService.delete(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      return res.send(await boardsService.find(req.query))
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      return res.send(await boardsService.findById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.userInfo.id
      res.send(201, await boardsService.create(req.body))
    } catch (error) {
      next(error)
    }
  }
}
