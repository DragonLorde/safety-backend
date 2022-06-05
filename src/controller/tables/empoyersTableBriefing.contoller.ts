import { NextFunction, Request, Response } from 'express'
import { EmployersTableBriefing } from '../../model'

export const getEmployersTableBriefing = async (req: Request, res: Response) => {
  try {
    const employers = await EmployersTableBriefing.find()
    res.status(200).json(employers)
  } catch (e) {
    console.log(e)
  }
}

export const setEmployersTableBriefing = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const requestData = req.body
    const createEmployers = await EmployersTableBriefing.create(requestData)
    res.status(201).json(createEmployers)
  } catch (e) {
    console.log(e)
    next(e)
  }
}
