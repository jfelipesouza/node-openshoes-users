export interface IUser {
  email: String
  password: String
  type: String
}

export interface UserDto {
  email: String
  password: String
}

export interface ILogist {
  store_name: String
  phone: number
  cnpj: String
  store_type: String
  address?: String
  link?: String
}
