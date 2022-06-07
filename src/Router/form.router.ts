import { Router } from 'express'
import { getEmployersTableBriefing } from '../controller/tables'
import { setEmployersTableBriefing } from '../controller/form/form.controller'

const formRouter = Router()

formRouter.put('/setComplaints/', getEmployersTableBriefing)
formRouter.get('/setEmployersTableBriefing/', setEmployersTableBriefing)

export default formRouter
