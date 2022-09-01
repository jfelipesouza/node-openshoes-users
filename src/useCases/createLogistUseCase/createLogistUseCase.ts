import { Logist } from '@prisma/client'
import { ILogist } from '../../@types/interfaces/user'
import { client } from '../../prisma/client'

export class CreateLogistUseCase {
  async execute({
    cnpj,
    phone,
    store_name,
    address,
    link,
    store_type
  }: ILogist): Promise<Logist> {
    //Verificar se o cnpj já esta cadastrado
    const logistAlreadyExist = await client.logist.findFirst({
      where: {
        cnpj
      }
    })
    if (logistAlreadyExist) {
      throw new Error('Logist already exists!')
    }
    // Verificar se o nome da loja já existe
    const storeNameAlreadyExist = await client.logist.findFirst({
      where: {
        store_name
      }
    })
    if (storeNameAlreadyExist) {
      throw new Error('Store already exists!')
    }

    const logist = await client.logist.create({
      data: {
        cnpj,
        phone,
        store_name,
        address,
        link,
        store_type
      }
    })

    return logist
  }
}
