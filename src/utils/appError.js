class AppError extends Error {

    constructor(message, statusCode) {

        super(message)

        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'
        this.statusCode = statusCode || 500
        this.message = message || 'Internal Server error'
        this.isOperational
        this.success = false
        
        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError