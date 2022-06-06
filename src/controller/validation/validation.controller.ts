import { NextFunction, Request, Response } from 'express'
import { ValidationSchema } from '../../model'

export const setValidation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const requestData = req.body
    const createEmployers = await ValidationSchema.create(requestData)
    res.status(201).json(createEmployers)
  } catch (e) {
    console.log(e)
    next(e)
  }
}

export const getValidation = async (req: Request, res: Response) => {
  try {
    const employers = await ValidationSchema.find()
    res.status(200).json(employers)
  } catch (e) {
    console.log(e)
  }
}

export const updateValidation = async (req: Request, res: Response) => {
  try {
    const { userId, violationEliminatedStatus } = req.body
    if (!userId) {
      res.status(400).json({
        status: false,
        error: 'notParams',
      })
    }
    await ValidationSchema.findByIdAndUpdate({ _id: userId }, { violationEliminated: violationEliminatedStatus }).exec()
    const employers = await ValidationSchema.find().exec()
    res.status(200).json({
      ...employers,
      status: true,
    })
  } catch (e) {
    console.log(e)
  }
}
