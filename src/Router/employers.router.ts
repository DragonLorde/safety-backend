import { Router } from 'express'
import { setEmployers, getEmployers, deleteEmployers } from '../controller/employers'

const employersRouter = Router()

employersRouter.put('/setEmployers/', setEmployers)
employersRouter.delete('/deleteEmployers/', deleteEmployers)
employersRouter.get('/getEmployers/', getEmployers)

export default employersRouter
