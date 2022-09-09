import { Request, Response } from 'express'
import { DeleteUserUseCase } from './deleteUseUserCase'

export class DeleteUserController {
  async delete(req: Request, res: Response) {
    const { email, password, type } = req.body
    const deleteUser = new DeleteUserUseCase()

    const message = await deleteUser.execute({ email, password, type })

    return res.status(200).send({ message: message })
  }
}
