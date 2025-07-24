import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const route = Router()

route.post('/register', registerUser)

// route.post('/login')

// route.patch('/')

export default route