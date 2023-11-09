import express from 'express'
import bookRouters from './routers/bookRouters.js'
import cors from 'cors'

const app = express()

app.use(cors({ origin: 'http://localhost:5173', credential: true }))
app.use(express.json())
app.use('/api/v1', bookRouters)


export default app