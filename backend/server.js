import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mongodb.js'
import userRouter from './Routes/userRouter.js'
import imageRouter from './Routes/imageRouter.js'

const PORT = process.env.PORT || 4000
const app  = express()


app.use(express.json())
app.use(cors())
await connectDb()

app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)
app.get('/', (req, res) =>
res.send("api working")
)

app.listen(PORT, ()=> console.log('server is running on port' + PORT))