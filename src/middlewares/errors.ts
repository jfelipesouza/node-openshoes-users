import { NextFunction, Request, Response } from 'express'

const BugLaucher = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  return response.json({ status: 'Error', message: error.message })
}

export { BugLaucher }
