import {ANetworkError} from "./ANetworkError";

/**
 * @swagger
 * components:
 *   #-------------------------------
 *   # Reusable schemas (data models)
 *   #-------------------------------
 *   responses:
 *     NotFound:
 *       description: The specified resource was not found
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Error'
 *     BadRequest:
 *       description: Cannot process the client's request due to invalid syntax or missing parameters
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Error'
 */
export const BadRequestCommon = {
    RESOURCE_NOT_FOUND: {code: 404, message: 'Resource Not Found'}
}

export default class BadRequestError extends ANetworkError {
    private static readonly _statusCode = 400;
    private readonly _code: number;
    private readonly _logging: boolean;
    private readonly _context: { [key: string]: any };

    constructor(params?: { code?: number, message?: string, logging?: boolean, context?: { [key: string]: any } }) {
        const {code, message, logging} = params || {};

        super(message || "Bad request");
        this._code = code || BadRequestError._statusCode;
        this._logging = logging || false;
        this._context = params?.context || {};

        // Only because we are extending a built in class
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    get errors() {
        return [{ message: this.message, context: this._context }];
    }

    get statusCode() {
        return this._code;
    }

    get logging() {
        return this._logging;
    }

}