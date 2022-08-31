import { NextFunction, Request, Response } from 'express'

const BugLaucher = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  return response.status(401).send({ status: 'Error', message: error.message })
}

export { BugLaucher }
