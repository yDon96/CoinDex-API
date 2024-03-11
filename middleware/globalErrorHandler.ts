import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import {ANetworkError} from "../models/errors/ANetworkError";

const globalErrorHandler: ErrorRequestHandler = (err: ANetworkError, req: Request, res: Response, next: NextFunction) => {
    // Log the error
    console.error(err.stack);

    // Send error response to the client
    res.status(err.statusCode || 500)
    res.json({
        message: err.message || 'Internal Server Error',
        error: err
    });
};

export {
    globalErrorHandler
}