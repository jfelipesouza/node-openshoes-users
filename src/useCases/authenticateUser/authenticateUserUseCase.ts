import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { UserDto } from '../../@types/interfaces/user'
import { client } from '../../prisma/client'

export class AuthenticateUserUseCase {
  async execute({ email, password }: UserDto) {
    const userExists = await client.user.findFirst({
      where: {
        email
      }
    })

    if (!userExists) {
      throw new Error('User  or password incorrect!')
    }

    // Verificar senha do usuario

    const passwordMatch = await compare(password, userExists.password)

    if (!passwordMatch) {
      throw new Error('User or password incorrect!')
    }

    // Verificar se o usuario é logista ou cliente

    if (userExists.type === 'logist') {
      const userLogistAccount = await client.userAccount.findFirst({
        where: {
          id_user: userExists.id
        }
      })
      const userLogist = await client.logist.findFirst({
        where: {
          id: userLogistAccount.id_logist
        }
      })

      const relation = await client.logistStores.findFirst({
        where: {
          logist_id: userLogist.code
        }
      })
      if (relation) {
        const store = await client.stores.findFirst({
          where: {
            id: relation.store_id
          }
        })
        const user = {
          id: userLogist.id,
          email: userExists.email,
          code: userLogist.code,
          type: userExists.type,
          store: {
            id: store.id,
            cnpj: store.cnpj,
            store_type: store.store_type,
            store_name: store.store_name,
            address: store.address,
            link: store.link
          }
        }
        console.log(store)
        const token = sign(user, 'pokemon', {
          subject: userExists.id,
          expiresIn: '1h'
        })

        return token
      }
      const user = {
        email: userExists.email,
        type: userExists.type,
        store: '',
        ...userLogist
      }

      const token = sign(user, 'pokemon', {
        subject: userExists.id,
        expiresIn: '1h'
      })

      return token
    }

    const token = sign(userExists, 'pokemon', {
      subject: userExists.id,
      expiresIn: '1h'
    })

    return token
  }
}
