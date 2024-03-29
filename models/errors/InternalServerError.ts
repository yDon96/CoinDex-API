import {ANetworkError} from "./ANetworkError";

/**
 * @swagger
 * components:
 *   #-------------------------------
 *   # Reusable schemas (data models)
 *   #-------------------------------
 *   responses:
 *     InternalServerError:
 *       description: The server encounters an unexpected condition that prevents it from fulfilling the client's request.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Error'
 */
export default class InternalServerError extends ANetworkError {
    private static readonly _statusCode = 500;
    private readonly _code: number;
    private readonly _logging: boolean;
    private readonly _context: { [key: string]: any };

    constructor(params?: {code?: number, message?: string, logging?: boolean, context?: { [key: string]: any }}) {
        const { code, message, logging } = params || {};

        super(message || "Internal Server Error");
        this._code = code || InternalServerError._statusCode;
        this._logging = logging || false;
        this._context = params?.context || {};

        // Only because we are extending a built in class
        Object.setPrototypeOf(this, InternalServerError.prototype);
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