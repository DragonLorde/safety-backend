import { Router } from 'express'
import {
  getEmployersTable, getEmployersTableBriefing, setEmployersTable, setEmployersTableBriefing
} from '../controller/tables'

const tableRouter = Router()

tableRouter.put('/setEmployersTable/', getEmployersTable)
tableRouter.get('/getEmployersTable/', setEmployersTable)

tableRouter.put('/setEmployersTableBriefing/', getEmployersTableBriefing)
tableRouter.get('/getEmployersTableBriefing/', setEmployersTableBriefing)

export default tableRouter
