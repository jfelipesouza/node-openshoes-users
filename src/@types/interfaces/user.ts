type IUser = {
  email: string
  password: string
  type: string
}

type IUserAutheticate = {
  email: string
  password: string
}

type ILogist = {
  store_name: string
  phone: number
  cnpj: string
}

type IUserLogist = IUser & ILogist

export { IUser, ILogist, IUserLogist, IUserAutheticate }
