interface IUser {
  email: String
  password: String
  type: String
}

interface UserDto {
  email: String
  password: String
}

interface ILogist {
  store_name: String
  phone: number
  cnpj: String
  store_type: String
  address?: String
  link?: String
}

export { IUser, ILogist, UserDto }
