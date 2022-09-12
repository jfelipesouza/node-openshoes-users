import { Request, Response } from 'express'
import { IStore } from '../../@types/interfaces/store'
import { client } from '../../prisma/client'
import { CreateStoreUseCase } from './createStoreUseCase'

export class CreateStoreController {
  async create(req: Request, res: Response) {
    const { address, cnpj, link, store_name, store_type, logist_code }: IStore =
      req.body

    const createStoreUseCase = new CreateStoreUseCase()

    const store = await createStoreUseCase.execute({
      address,
      cnpj,
      link,
      store_name,
      store_type
    })

    const relationLogistStores = await client.logistStores.create({
      data: { store_id: store.id, logist_id: logist_code }
    })

    if (relationLogistStores) {
      return res.status(200).send({ store })
    }
  }
}
