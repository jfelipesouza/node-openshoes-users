import { client } from '../../prisma/client'

type Code = {
  code: string
}
export class GetStoreInfoUseCase {
  async execute({ code }: Code) {
    const logistStores = await client.logistStores.findFirst({
      where: {
        logist_id: code
      }
    })

    const store = await client.stores.findFirst({
      where: {
        id: logistStores.store_id
      }
    })

    const { address, cnpj, link, store_name, store_type } = store

    const storeInfo = {
      address,
      cnpj,
      link,
      store_name,
      store_type
    }

    return storeInfo
  }
}
