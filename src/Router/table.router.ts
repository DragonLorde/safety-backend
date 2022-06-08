import { Router } from 'express'
import {
  getEmployersTable, getEmployersTableBriefing, setEmployersTable, setEmployersTableBriefing
} from '../controller/tables'

const tableRouter = Router()

tableRouter.put('/setEmployersTable/', setEmployersTable)
tableRouter.get('/getEmployersTable/', getEmployersTable)

tableRouter.put('/setEmployersTableBriefing/', setEmployersTableBriefing)
tableRouter.get('/getEmployersTableBriefing/', getEmployersTableBriefing)
export default tableRouter
