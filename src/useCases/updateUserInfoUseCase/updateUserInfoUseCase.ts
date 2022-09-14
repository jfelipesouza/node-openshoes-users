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
        cnpj: '',
        store_name: '',
        store_type: '',
        link: '',
        address: ''
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

    const stores = await client.stores.findFirst({
      where: {
        id: store.id
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

    if (stores.address !== store.address) {
      await client.stores.update({
        where: {
          id: stores.id
        },
        data: {
          address: store.address
        }
      })
    }
    if (stores.link !== store.link) {
      await client.stores.update({
        where: {
          id: stores.id
        },
        data: {
          link: store.link
        }
      })
    }
    if (stores.store_name !== store.store_name) {
      await client.stores.update({
        where: {
          id: stores.id
        },
        data: {
          store_name: store.store_name
        }
      })
    }
    if (stores.store_type !== store.store_type) {
      await client.stores.update({
        where: {
          id: stores.id
        },
        data: {
          store_type: store.store_type
        }
      })
    }
    if (stores.cnpj !== store.cnpj) {
      await client.stores.update({
        where: {
          id: stores.id
        },
        data: {
          cnpj: store.cnpj
        }
      })
    }

    if (store.store_name === stores.store_name) {
      await client.stores.update({
        where: {
          id: stores.id,
          store_name: store.store_name
        },
        data: {
          store_name: store.store_name,
          address: store.address,
          cnpj: store.cnpj,
          store_type: store.store_type,
          link: store.link
        }
      })
    }

    const updatedStore = await client.stores.findFirst({
      where: {
        id: stores.id
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
