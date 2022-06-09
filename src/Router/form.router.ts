import { Router } from 'express'
import { setEmployersTableBriefing, getEmployersTableBriefing } from '../controller/form/form.controller'

const formRouter = Router()

formRouter.put('/setForm/', setEmployersTableBriefing)
formRouter.get('/getForm/', getEmployersTableBriefing)

export default formRouter
