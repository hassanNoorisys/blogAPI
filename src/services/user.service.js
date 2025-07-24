import constants from "../config/constants.js"
import userModel from "../models/user.model.js"
import AppError from "../utils/appError.js"

const userRegisterService = async (userData) => {

    const { name, email, mobile, password, profileImg } = userData

    const existingUser = await userModel.findOne({

        $or: [
            { email },
            { mobile }
        ]
    })

    if (existingUser) return new AppError('User Already present', constants.CONFLICT)

    const newUser = new userModel({ name, email, password, profileImg, mobile })
    await newUser.save()

    return { name: newUser.name, email: newUser.email, mobile: newUser.mobile }
}

export { userRegisterService }