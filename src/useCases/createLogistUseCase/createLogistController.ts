import { Request, Response } from 'express'
import { client } from '../../prisma/client'
import { CreateUserUseCase } from '../user/createUserUseCase'
import { CreateLogistUseCase } from './createLogistUseCase'

export class CreateLogistController {
  async create(req: Request, res: Response) {
    const { type, email, password } = req.body

    const createLogistUseCase = new CreateLogistUseCase()
    const createUserUseCase = new CreateUserUseCase()

    const user = await createUserUseCase.execute({ email, password, type })
    const logist = await createLogistUseCase.execute()

    await client.userAccount.create({
      data: {
        id_user: user.id,
        id_logist: logist.id
      }
    })

    return res.status(200).send({
      id: logist.id,
      code: logist.code,
      email,
      type,
      password: user.password
    })
  }
}
