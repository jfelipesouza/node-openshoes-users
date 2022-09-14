import { Request, Response } from 'express'
import { GetStoreInfoUseCase } from './getStoreInfoUseCase'

export class GetStoreInfoController {
  async get(req: Request, res: Response) {
    const getStoreInfoUseCase = new GetStoreInfoUseCase()

    const { code } = req.params

    const store = await getStoreInfoUseCase.execute({ code })

    return res.status(200).send({ store })
  }
}
