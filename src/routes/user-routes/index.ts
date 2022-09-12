import { Router } from 'express'
import { CreateLogistController } from '../../useCases/createLogistUseCase/createLogistController'
import { CreateStoreController } from '../../useCases/createStoreUseCase/createStoreController'
import { DeleteUserController } from '../../useCases/deleteUserUseCase/deleteUserController'
import { RefreshTokenController } from '../../useCases/refreshTokenUseCase/refreshTokenController'
import { UpdateUserInfoController } from '../../useCases/updateUserInfoUseCase/updateUserInfoController'
import { UserController } from '../../useCases/user/UserController'

const userRoutes = Router()

const createUserController = new UserController()
const createLogistController = new CreateLogistController()
const deleteUserController = new DeleteUserController()
const createStoreController = new CreateStoreController()
const refreshTokenController = new RefreshTokenController()
const updateUserInfoController = new UpdateUserInfoController()

userRoutes.post('/', createUserController.create)
userRoutes.delete('/', deleteUserController.delete)
userRoutes.patch('/', updateUserInfoController.update)

userRoutes.post('/logist', createLogistController.create)
userRoutes.post('/store', createStoreController.create)
userRoutes.post('/refresh', refreshTokenController.generate)

export { userRoutes }
