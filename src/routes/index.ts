import { Request, Response, Router } from 'express'
import { ensureAuthenticated } from '../middlewares/authenticate'
import { client } from '../prisma/client'
import { AuthenticateUserController } from '../useCases/authenticateUser/authenticateUserController'
import { UserController } from '../useCases/user/UserController'

const router = Router()

// User Controler

const createUserController = new UserController()
const authenticateUser = new AuthenticateUserController()

const port = process.env.PORT

router.get('/', (req, res) => {
  res.send({ message: 'Esta tudo ok', port })
})

// User Routes

router.post('/users', createUserController.create)
router.get('/users', async (req: Request, res: Response) => {
  const users = await client.user.findMany()
  return res.send({
    users
  })
})
router.put('/user/:id', (req, res) => {
  res.send({
    user: req.params.id
  })
})

// Authenticate Route
router.post('/login', authenticateUser.handle)

// Logist Routes

// Store Routes

export { router }
