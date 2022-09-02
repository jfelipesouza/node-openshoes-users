import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { router } from '../routes'
import { BugLaucher } from '../middlewares/errors'
import { corsConfig } from './cors'

// Created server
const app = express()

// Set Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))
app.use('/', router)
app.use(BugLaucher)

export { app }
