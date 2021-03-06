import { Router } from 'express'
import { setValidation, updateValidation, getValidation } from '../controller/validation'

const validationRouter = Router()

validationRouter.put('/setEmployers/', setValidation)
validationRouter.post('/updateEmployers/', updateValidation)
validationRouter.get('/getEmployers/', getValidation)

export default validationRouter
