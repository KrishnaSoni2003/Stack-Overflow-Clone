import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'
// import '../models/auth.js'

// in react it will be okay to write users, but for node we have to write users.js
import userRoutes from './routes/users.js'

// to create express server
const app = express();
dotenv.config();
// Backend is going to be rest api and not a static one.
// we will recieve request through json and the response will also be as json
// hence, we stating a limit which can be extendable
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());
// cors is a middleware

// callback function
app.get('/', (req, res) => {
    res.send("This is a Stack Overflow clone API")
})

app.use('/user', userRoutes)

// // for single response
// app.post('auth/signup', ()=>{

// })
// this will need 20 lines for single response, 20*no. of responses will result in many lines of codes
// hence we make a separate folder called routes

const PORT = process.env.PORT || 5000

const CONNECTION_URL = process.env.REACT_APP_CONNECTION_URL
const DATABASE_URL = process.env.CONNECTION_UR
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))