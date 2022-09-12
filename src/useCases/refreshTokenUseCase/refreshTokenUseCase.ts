import jwt_decode from 'jwt-decode'
import { client } from '../../prisma/client'
import { sign } from 'jsonwebtoken'

export class RefreshTokenUseCase {
  async execute(token: string) {
    const userToken = await JSON.parse(JSON.stringify(jwt_decode(token)))
    const relation = await client.logistStores.findFirst({
      where: {
        logist_id: userToken.code
      }
    })
    if (relation) {
      const store = await client.stores.findFirst({
        where: {
          id: relation.store_id
        }
      })
      const user = {
        id: userToken.id,
        email: userToken.email,
        code: userToken.code,
        type: userToken.type,
        store: {
          id: store.id,
          cnpj: store.cnpj,
          store_type: store.store_type,
          store_name: store.store_name,
          address: store.address,
          link: store.link
        }
      }
      const newToken = sign(user, 'pokemon', {
        subject: userToken.id,
        expiresIn: '1h'
      })

      return newToken
    }

    throw new Error('Not possible generate')
  }
}
