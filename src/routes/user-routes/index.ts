import { Router } from 'express'
import { CreateLogistController } from '../../useCases/createLogistUseCase/createLogistController'
import { UserController } from '../../useCases/user/UserController'

const userRoutes = Router()

const createUserController = new UserController()
const createLogistController = new CreateLogistController()

userRoutes.post('/', createUserController.create)
userRoutes.post('/logist', createLogistController.create)
export { userRoutes }
