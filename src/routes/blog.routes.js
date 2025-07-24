import { Router } from "express";
import verifyToken from "../middleware/verifyToken.js";
import { createBlog, getBlogs } from '../controllers/blog.controller.js'
import blogImageUpload from "../middleware/uploadBlogImages.js";

const route = Router()

route.post('/create', verifyToken, blogImageUpload.array('images'), createBlog)

route.get('/', getBlogs)

export default route