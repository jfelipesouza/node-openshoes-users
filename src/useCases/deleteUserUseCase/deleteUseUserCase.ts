import { IUser } from '../../@types/interfaces/user'
import { client } from '../../prisma/client'

export class DeleteUserUseCase {
  async execute({ email }: IUser) {
    const user = await client.user.findFirst({
      where: {
        email
      }
    })

    const isDelete = await client.user.delete({
      where: {
        id: user.id
      }
    })

    if (isDelete) {
      return 'Deletado com sucesso'
    }
    if (!isDelete) {
      throw new Error('Not possibily delete user')
    }
  }
}
