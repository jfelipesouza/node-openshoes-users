type IUser = {
  email: string
  password: string
  type: string
}

type UserDto = {
  email: string
  password: string
}

type ILogist = {
  store_name: string
  phone: number
  cnpj: string
  store_type: string
  address?: string
  link?: string
}

type IUserLogist = IUser & ILogist

export { IUser, ILogist, IUserLogist, UserDto }
