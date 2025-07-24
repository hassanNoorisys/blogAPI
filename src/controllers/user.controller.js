import asyncHandler from "../utils/asyncHandler.js";
import AppError from "../utils/appError.js";
import constants from "../config/constants.js";
import { userRegisterService } from "../services/user.service.js";
import customResponse from '../utils/responseHandler.js'


const registerUser = asyncHandler(async (req, res, next) => {

    const { name, email, mobile, password } = req.body

    if (!name || !email || !mobile || !password) return next(new AppError('All Fields are required', constants.BAD_REQUEST))

    // file handling


    const newUser  = await userRegisterService({ name, email, mobile, password, profileImg: 'profileImgURL' })

    // send response if all good
    customResponse(res, constants.CREATED, 'success', 'user registered successfully', { name: newUser.name, email: newUser.email, mobile: newUser.mobile })

})

export { registerUser }