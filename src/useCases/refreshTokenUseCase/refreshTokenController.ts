import { Request, Response } from 'express'
import { RefreshTokenUseCase } from './refreshTokenUseCase'

export class RefreshTokenController {
  async generate(req: Request, res: Response) {
    const refreshTokenUseCase = new RefreshTokenUseCase()

    const { token } = req.body

    const newToken = await refreshTokenUseCase.execute(token)

    return res.status(200).send({
      token: newToken
    })
  }
}
