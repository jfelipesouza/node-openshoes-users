import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

export const ensureAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken = req.headers.authorization

  if (!authToken) {
    return res.status(401).send({
      message: 'Token is missing'
    })
  }

  const [, token] = authToken.split(' ')
  try {
    verify(token, 'pokemon')
    return next()
  } catch (error) {
    return res.status(401).send({
      message: 'Token invalid'
    })
  }
}
