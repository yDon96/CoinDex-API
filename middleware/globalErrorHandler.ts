import {ErrorRequestHandler, NextFunction, Request, Response} from 'express'
import {ANetworkError} from '../models/errors/ANetworkError'

/**
 * @swagger
 * components:
 *   #-------------------------------
 *   # Reusable schemas (data models)
 *   #-------------------------------
 *   schemas:
 *      Error:
 *        type: object
 *        properties:
 *          code:
 *            type: string
 *          message:
 *            type: string
 *        required:
 *          - code
 *          - message
 */
const globalErrorHandler: ErrorRequestHandler = (
    err: ANetworkError,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
  // Log the error
  console.error(err.stack)

  // Send error response to the client
  const code = err.statusCode || 500
  res.status(code)
  res.json({
    message: err.message || 'Internal Server Error',
    code,
  })
}

export {globalErrorHandler}
