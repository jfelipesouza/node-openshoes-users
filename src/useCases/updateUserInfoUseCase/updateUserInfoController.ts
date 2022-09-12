import { Request, Response } from 'express'
import { UpdateUserInfoUseCase } from './updateUserInfoUseCase'

export class UpdateUserInfoController {
  async update(req: Request, res: Response) {
    const { userData } = req.body
    console.log(userData)
    const updateUserInfo = new UpdateUserInfoUseCase()
    const user = await updateUserInfo.execute(userData)
    return res.status(200).send(user)
  }
}
