import {getAll, getById} from "./entryPoints/get.coins";

const exp = require('express');

const router = exp.Router();

const basePath = '/coins';

/**
 * @swagger
 * /coins:
 *     get:
 *       summary: "Get all coins"
 *       description: "Retrieves a list of all coins."
 *       produces:
 *         - "application/json"
 *       responses:
 *         '200':
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                  type: array
 *                  items:
 *                     $ref: '#/components/schemas/Coin'
 *         '404':
 *           $ref: '#/components/responses/NotFound'
 *         500:
 *           $ref: '#/components/responses/InternalServerError'
 */
router.get(basePath, getAll);

/**
 * @swagger
 * /coins/:id:
 *     get:
 *       summary: "Get coin by Id"
 *       description: "Retrieves coin's detail by coin Id."
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The ID of the resource to retrieve.
 *           schema:
 *             type: string
 *       produces:
 *         - "application/json"
 *       responses:
 *         '200':
 *           description: OK
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Coin'
 *         '400':
 *           $ref: '#/components/responses/BadRequest'
 *         '404':
 *           $ref: '#/components/responses/NotFound'
 *         '500':
 *           $ref: '#/components/responses/InternalServerError'
 */
router.get(basePath + '/:id', getById);

export {
    router
}