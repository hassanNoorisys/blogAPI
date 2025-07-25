import constants from '../config/constants.js';
import blogModel from '../models/blog.model.js';
import AppError from '../utils/appError.js';

// create blog service
const createBlogService = async (data) => {
  const { title, content, images, userId } = data;

  const slug =
    title
      .toLocaleLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-') +
    ' ' +
    Date.now();

  const newBlog = new blogModel({ title, content, images, slug, userId });

  await newBlog.save();

  return newBlog;
};

// get blogs service
const getBlogsService = async (query) => {
  let isUniqueQuery = query.id || query.slug;

  const page = query.page;
  const size = query.size;

  const blogs = await blogModel
    .find({
      ...(query._id && { _id: query._id }),
      ...(query.title && { title: query.title }),
      ...(query.slug && { slug: query.slug }),
    })
    .skip(!isUniqueQuery ? (page - 1) * size || 0 : 0)
    .limit(!isUniqueQuery ? size || 5 : 1)
    .populate({
      path: 'userId',
      select: ['-mobile', '-password', '-createdAt', '-updatedAt'],
    });

  if (!blogs || blogs.length < 1)
    new AppError('No Blogs found', constants.NO_CONTENT);

  return blogs;
};

export { createBlogService, getBlogsService };
