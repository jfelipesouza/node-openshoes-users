import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
//import { router } from '../routes'

// Created server
const app = express()

// Set Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

// Set endpoints
//app.use('/', router)

export { app }
