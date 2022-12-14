
class ApiError extends Error{

    constructor(message, code = 500){
        super(message)
        this.success = false
        this.statusCode = code
    }
}

const response = (message, data) => {
    return{
        success: true,
        message: message,
        ...data
    }
}

module.exports = {
    ApiError,
    response
}