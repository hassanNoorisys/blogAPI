import app from "./app.js";

import dotenv from "dotenv";
import connectDB from "./src/config/db.config.js";
dotenv.config({ path: './.env.dev' })

const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

app.listen(PORT, () => {

    console.log(`Server is up at ${PORT} in ${NODE_ENV} environment`)
    connectDB()
})