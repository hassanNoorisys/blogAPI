import express, { urlencoded } from "express";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./src/public'))


// routes

// error middleware

export default app