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

      const user = {
        email: userExists.email,
        type: userExists.type,
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
