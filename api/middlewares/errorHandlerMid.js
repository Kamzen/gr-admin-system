
const errorHandlerMid = (err, req, res, next) => {

    return res.status(err.statusCode || 500).json({
        success: err.success || false ,
        message: err.message || 'Server Error'
    })

}

module.exports = errorHandlerMid