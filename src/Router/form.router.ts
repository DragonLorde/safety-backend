import { Router } from 'express'
import { getEmployersTableBriefing } from '../controller/tables'
import { setEmployersTableBriefing } from '../controller/form/form.controller'

const formRouter = Router()

formRouter.put('/setForm/', getEmployersTableBriefing)
formRouter.get('/getForm/', setEmployersTableBriefing)

export default formRouter
