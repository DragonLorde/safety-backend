import { NextFunction, Request, Response } from 'express'
import { ComplaintsSchema } from '../../model'

export const getEmployersTableBriefing = async (req: Request, res: Response) => {
  try {
    const employers = await ComplaintsSchema.find()
    res.status(200).json(employers)
  } catch (e) {
    console.log(e)
  }
}

export const setEmployersTableBriefing = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const requestData = req.body
    const createEmployers = await ComplaintsSchema.create(requestData)
    res.status(201).json(createEmployers)
  } catch (e) {
    console.log(e)
    next(e)
  }
}
