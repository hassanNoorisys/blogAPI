import { Schema, model } from "mongoose"
import bcrypt from "bcryptjs"
const userSchema = new Schema({

    name: {

        type: String,
        required: true,
        message: 'Name is required'
    },

    email: {

        type: String,
        required: true,
        unique: true,
        message: 'Email is required'
    },

    mobile: {

        type: String,
        required: true,
        unique: true,
        message: 'Mobile number is required'
    },

    profileImg: {

        type: String
    },

    password: {

        type: String,
        required: true,
        message: 'password is required'
    }


}, { timestamps: true })

// hash the password before saving it to the database
userSchema.pre('save', async function (next) {

    if (this.isModified('password'))
        this.password = await bcrypt.hash(this.password, 10)

    next()
})

export default model('user', userSchema)