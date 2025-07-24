import app from "./app.js";

import dotenv from "dotenv";
dotenv.config({ path: './.env.dev' })

const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV

app.listen(PORT, () => {

    console.log(`Server is up at ${PORT} in ${NODE_ENV} environment`)
})