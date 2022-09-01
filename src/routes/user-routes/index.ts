import { Router } from 'express'
import { ensureAuthenticated } from '../../middlewares/authenticate'
import { client } from '../../prisma/client'
import { CreateLogistController } from '../../useCases/createLogistUseCase/createLogistController'
import { UserController } from '../../useCases/user/UserController'

const userRoutes = Router()

const createUserController = new UserController()
const createLogistController = new CreateLogistController()

userRoutes.post('/', createUserController.create)
userRoutes.post('/logist', createLogistController.create)
userRoutes.get('/:id', ensureAuthenticated, async (req, res) => {
  const id = req.params.id
  const user = await client.user.findFirst({
    where: {
      id
    }
  })
  return res.send({
    user
  })
})

export { userRoutes }
