import { Request, Response, Router } from 'express'
import { client } from '../prisma/client'
import { AuthenticateUserController } from '../useCases/authenticateUser/authenticateUserController'
import { userRoutes } from './user-routes'

const router = Router()
const authenticateUser = new AuthenticateUserController()

const port = process.env.PORT

router.get('/', (req, res) => {
  res.send({ message: 'Esta tudo ok', port })
})

// User Routes
router.use('/user', userRoutes)
router.get('/users', async (req: Request, res: Response) => {
  const users = await client.user.findMany()
  return res.send({
    users
  })
})

// Authenticate Route
router.post('/login', authenticateUser.handle)

// Logist Routes

// Store Routes

export { router }
