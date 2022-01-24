const ErrorHandler = require("../utils/errorhandler");


module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 5000;
    err.message = err.message || "Internal server error";


    if (err.name === "CastError"){
        const message = `Resource not found invalid ${err.path}`;
        err = new ErrorHandler(message, 404)
    }



    res.status(err.statusCode).json({
        success: false,
        message: err.message,
        errorType: err.statusCode
    })
}