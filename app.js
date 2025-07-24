import express, { urlencoded } from "express";
import errorHandler from "./src/middleware/errorHandler.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./src/public'))


// routes

import userRoute from './src/routes/user.routes.js'
app.use('/api/user', userRoute)

// error middleware
app.use(errorHandler)

export default app