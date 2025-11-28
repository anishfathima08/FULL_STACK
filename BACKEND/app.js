const connectDB = require("./config/db");
connectDB()

const express = require('express')
const app = express()

app.use(express.json({ limit : '50mb' }))

const cors = require('cors')
app.use(cors())

const productRouter = require("./routers/productRouter");
app.use('/product', productRouter)

const userRouter = require("./routers/userRouter");
app.use('/user', userRouter)

const dotenv = require('dotenv');
dotenv.config()

app.listen(process.env.PORT, () => {
    console.log('Server Running Successfully...')
}) 