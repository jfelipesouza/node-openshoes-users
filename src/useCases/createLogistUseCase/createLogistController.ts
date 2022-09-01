import { Request, Response } from 'express'
import { IUserLogist } from '../../@types/interfaces/user'
import { client } from '../../prisma/client'
import { CreateUserUseCase } from '../user/createUserUseCase'
import { CreateLogistUseCase } from './createLogistUseCase'

export class CreateLogistController {
  async create(req: Request, res: Response) {
    const {
      cnpj,
      phone,
      store_name,
      email,
      password,
      type,
      store_type,
      address,
      link
    } = req.body

    const createLogistUseCase = new CreateLogistUseCase()
    const createUserUseCase = new CreateUserUseCase()

    const user = await createUserUseCase.execute({ email, password, type })
    const logist = await createLogistUseCase.execute({
      cnpj,
      phone,
      store_name,
      store_type,
      address,
      link
    })

    const createUserAccount = await client.userAccount.create({
      data: {
        id_user: user.id,
        id_logist: logist.id
      }
    })

    return res.status(200).send(logist)
  }
}
