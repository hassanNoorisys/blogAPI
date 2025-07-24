import blogModel from "../models/blog.model.js"

// create blog service  
const createBlogService = async (data) => {

    const { title, content, images, userId } = data

    const slug = title.toLocaleLowerCase()
        .trim().
        replace(/[^\w\s-]/g, '').
        replace(/\s+/g, '-') + ' ' +  Date.now()

    const newBlog = new blogModel({ title, content, images, slug, userId })

    await newBlog.save()

    return newBlog
}

export {

    createBlogService
}