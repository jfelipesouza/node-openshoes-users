import { Request, Response } from 'express'
import { CreateUserUseCase } from './createUserUseCase'

export class UserController {
  async create(req: Request, res: Response) {
    const { email, password, type } = req.body

    const createUserUseCase = new CreateUserUseCase()

    const user = await createUserUseCase.execute({ email, password, type })

    return res.status(200).send(user)
  }
}
