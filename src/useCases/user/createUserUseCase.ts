import { hash } from 'bcryptjs'
import { IUser } from '../../@types/interfaces/user'
import { client } from '../../prisma/client'

export class CreateUserUseCase {
  async execute({ email, password, type }: IUser) {
    // Verificar se o usuario existe
    const userAlreadyExists = await client.user.findFirst({
      where: {
        email
      }
    })
    if (userAlreadyExists) {
      throw new Error('User already exists!')
    }
    // Cadastrar novo usuario
    const passwordHash = await hash(password, 8)
    const user = await client.user.create({
      data: {
        email,
        password: passwordHash,
        type
      }
    })
    return user
  }
}
