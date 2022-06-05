import { NextFunction, Request, Response } from 'express'
import { EmployersTableSchema } from '../../model'

export const getEmployersTable = async (req: Request, res: Response) => {
  try {
    const employers = await EmployersTableSchema.find()
    res.status(200).json(employers)
  } catch (e) {
    console.log(e)
  }
}

export const setEmployersTable = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const requestData = req.body
    const createEmployers = await EmployersTableSchema.create(requestData)
    res.status(201).json(createEmployers)
  } catch (e) {
    console.log(e)
    next(e)
  }
}
