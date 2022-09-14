import { UpdateUserForm } from '../../@types/interfaces/updateUser'
import { client } from '../../prisma/client'

export class UpdateUserInfoUseCase {
  async execute(userData: UpdateUserForm) {
    const { email, store, id, code } = userData
    const updatedUser = {
      id,
      email,
      code,
      store: {
        id: store.id,
        cnpj: store.cnpj,
        store_name: store.store_name,
        store_type: store.store_type,
        link: store.link,
        address: store.address
      }
    }

    const userAccount = await client.userAccount.findFirst({
      where: {
        id_logist: id
      }
    })

    const user = await client.user.findFirst({
      where: {
        id: userAccount.id_user
      }
    })

    if (user.email !== email) {
      const userAlreadyExist = await client.user.findFirst({
        where: {
          email
        }
      })
      if (userAlreadyExist) {
        throw new Error('User already exist')
      }
      const changeUserInfo = await client.user.update({
        where: {
          id: user.id
        },
        data: {
          email
        }
      })
      updatedUser.email = changeUserInfo.email
    }

    await client.stores.update({
      where: {
        id: store.id
      },
      data: {
        cnpj: updatedUser.store.cnpj,
        address: updatedUser.store.address,
        link: updatedUser.store.link,
        store_name: updatedUser.store.store_name,
        store_type: updatedUser.store.store_type
      }
    })

    const updatedStore = await client.stores.findFirst({
      where: {
        id: store.id
      }
    })

    updatedUser.store = {
      id: store.id,
      address: updatedStore.address,
      cnpj: updatedStore.cnpj,
      link: updatedStore.link,
      store_name: updatedStore.store_name,
      store_type: updatedStore.store_type
    }

    return updatedUser
  }
}
