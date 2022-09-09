import { StoreDTO } from '../../@types/interfaces/store'
import { client } from '../../prisma/client'

export class CreateStoreUseCase {
  async execute({ address, cnpj, link, store_name, store_type }: StoreDTO) {
    const store = client.stores

    const storeAlreadyExists = await store.findFirst({
      where: {
        cnpj
      }
    })
    if (storeAlreadyExists) {
      throw new Error('Store already exists')
    }
    const storeNameAlreadyExists = await store.findFirst({
      where: {
        store_name
      }
    })
    if (storeNameAlreadyExists) {
      throw new Error('Store name already exists')
    }

    const newStore = await store.create({
      data: {
        cnpj,
        store_name,
        store_type,
        address,
        link
      }
    })

    return newStore
  }
}
