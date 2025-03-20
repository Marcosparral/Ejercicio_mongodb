import { CustomError } from '../errors/customError.js';
import { InternalServerError } from '../errors/typeError.js';

export const errorHandler = (err, req, res, _next) => {
    if (!(err instanceof CustomError)) {
        err = new InternalServerError(
            err.message || 'Error inesperado',
            err.statusCode || 500,
            err.details || 'Ups! algo salio mal'
        );

    }

    const errorResponse = {
        status: 'ERROR',
        message: err.message,
        statusCode: err.statusCode,
        details: err.details
    };

    console.error (
        `ERROR: ${errorResponse.message} - Details: ${errorResponse.details} - Status Code: ${errorResponse.statusCode}`
    );

    res.status(err.statusCode).json(errorResponse);

};