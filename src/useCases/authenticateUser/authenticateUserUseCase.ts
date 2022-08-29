import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { IUserAutheticate } from '../../@types/interfaces/user'
import { client } from '../../prisma/client'

export class AuthenticateUserUseCase {
  async execute({ email, password }: IUserAutheticate) {
    const userExists = await client.user.findFirst({
      where: {
        email
      }
    })

    if (!userExists) {
      throw new Error('User or password incorrect!')
    }

    // Verificar senha do usuario

    const passwordMatch = await compare(password, userExists.password)

    if (!passwordMatch) {
      throw new Error('User or password incorrect!')
    }

    const token = sign(userExists, 'pokemon', {
      subject: userExists.id,
      expiresIn: '1h'
    })

    return token
  }
}
