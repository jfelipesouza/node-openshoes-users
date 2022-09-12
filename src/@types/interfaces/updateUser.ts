import { StoreDTO } from './store'

type Store = StoreDTO & {
  id: string
}

export type UpdateUserForm = {
  id: string
  email: string
  code: string
  store: Store
}
