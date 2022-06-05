import express, { json, Application } from 'express'
import cors from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import { employersRouter, tableRouter, validationRouter } from './Router'

const { PORT, MONGO_URL } = process.env
const app: Application = express()

app.use(cors())
app.use(json())
app.use('/api/employers', employersRouter)
app.use('/api/table', tableRouter)
app.use('/api/validation', validationRouter)

app.listen(PORT, async () => {
  console.log(`server is started : http://localhost:${PORT}`)
  await mongoose.connect(MONGO_URL as string, () => console.log('DB connect'))
})
