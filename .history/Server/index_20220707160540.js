require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')
const cors = require('cors')

app.use(cors({
  origin: "http://localhost:3000"
}))

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@hanabooking.8pucz8k.mongodb.net/?retryWrites=true&w=majority`,
      {
        // useCreateIndex: true,
        //useNewUrlParser: true,
        //useUnifiedTopology: true,
        // useFindAndModify: false,
      }
    )
    console.log('MongoDB connected')
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}
connectDB()

const app = express()

app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)

app.listen(5000, () => console.log(`server started on port 5000`))