import { Router } from 'express'

export const apiRouter = Router()

import { api } from '../controllers/api.controller.js'

apiRouter.get('/', api)
