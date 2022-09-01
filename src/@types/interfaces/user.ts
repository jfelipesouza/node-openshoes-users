export interface IUser {
  email: string
  password: string
  type: string
}

export interface UserDto {
  email: string
  password: string
}

export interface ILogist {
  store_name: string
  phone: number
  cnpj: string
  store_type: string
  address?: string
  link?: string
}
