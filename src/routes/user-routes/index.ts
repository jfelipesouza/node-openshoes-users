import { Router } from 'express'
import { CreateLogistController } from '../../useCases/createLogistUseCase/createLogistController'
import { CreateStoreController } from '../../useCases/createStoreUseCase/createStoreController'
import { DeleteUserController } from '../../useCases/deleteUserUseCase/deleteUserController'
import { RefreshTokenController } from '../../useCases/refreshTokenUseCase/refreshTokenController'
import { UserController } from '../../useCases/user/UserController'

const userRoutes = Router()

const createUserController = new UserController()
const createLogistController = new CreateLogistController()
const deleteUserController = new DeleteUserController()
const createStoreController = new CreateStoreController()
const refreshTokenController = new RefreshTokenController()

userRoutes.post('/', createUserController.create)
userRoutes.delete('/', deleteUserController.delete)

userRoutes.post('/logist', createLogistController.create)
userRoutes.post('/store', createStoreController.create)
userRoutes.post('/refresh', refreshTokenController.generate)
export { userRoutes }
