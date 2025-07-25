import constants from '../config/constants.js';
import {
  createBlogService,
  getBlogsService,
} from '../services/blog.service.js';
import AppError from '../utils/appError.js';
import asyncHandler from '../utils/asyncHandler.js';
import responseHandler from '../utils/responseHandler.js';
import { Types } from 'mongoose';

// create blog
const createBlog = asyncHandler(async (req, res, next) => {
  const userId = new Types.ObjectId(req.user.id);

  const { title, content } = req.body;

  if (!title || !content)
    return next(new AppError('All fields are required', constants.BAD_REQUEST));

  // handle image url
  let images = [];
  for (const file of req.files) {
    images.push({ url: file.filename, alt: title });
  }

  // save data
  const newBlog = await createBlogService({ title, content, images, userId });

  responseHandler(res, constants.OK, 'success', 'Blog created successfully', {
    title: newBlog.title,
  });
});

// get blogs
const getBlogs = asyncHandler(async (req, res, next) => {
  const query = req.query;

  const blogs = await getBlogsService(query);

  responseHandler(res, constants.OK, 'success', 'Blogs found', { blogs });
});

export { createBlog, getBlogs };
