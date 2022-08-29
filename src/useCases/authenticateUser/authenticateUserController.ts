import { Request, Response } from 'express'
import { AuthenticateUserUseCase } from './authenticateUserUseCase'

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body

    const authenticateUser = new AuthenticateUserUseCase()

    const token = await authenticateUser.execute({ email, password })

    return res.send({
      token
    })
  }
}

export { AuthenticateUserController }
