import { NextFunction, Request, Response } from 'express'
import { Employers } from '../../model'

export const setEmployers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const requestData = req.body
    const createEmployers = await Employers.create(requestData)
    res.status(201).json(createEmployers)
  } catch (e) {
    console.log(e)
    next(e)
  }
}

export const getEmployers = async (req: Request, res: Response) => {
  try {
    const employers = await Employers.find()
    res.status(200).json(employers)
  } catch (e) {
    console.log(e)
  }
}

export const deleteEmployers = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body
    if (!userId) {
      res.status(400).json({
        status: false,
        error: 'notParams',
      })
    }
    await Employers.findOneAndRemove({ _id: userId }).exec()
    const employers = await Employers.find().exec()
    res.status(200).json({
      ...employers,
      status: true,
    })
  } catch (e) {
    console.log(e)
  }
}
