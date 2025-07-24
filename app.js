import express, { urlencoded } from "express";
import errorHandler from "./src/middleware/errorHandler.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./src/public'))


// routes
import userRoute from './src/routes/user.routes.js'
import blogRoute from './src/routes/blog.routes.js'

app.use('/api/user', userRoute)
app.use('/api/blog', blogRoute)

// error middleware
app.use(errorHandler)

export default app