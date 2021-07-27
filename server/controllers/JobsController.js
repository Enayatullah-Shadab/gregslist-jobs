import { jobsService } from '../services/JobsService'
import BaseController from '../utils/BaseController'

export class JobsController extends BaseController {
  constructor() {
    super('api/jobs')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id')
      .put('/:id/')
      .delete('/:id')
  }

  async getAll(req, res, next) {
    try {
      const jobs = await jobsService.getAll(req.query)
      res.send(jobs)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const job = await jobsService.getById(req.params.id)
      res.send(job)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const job = await jobsService.create(req.body)
      res.send(job)
    } catch (error) {
      next(error)
    }
  }
}