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
 *         200:
 *           description: "Successful operation"
 */
router.get(basePath, async (req: any, res: any, next: any) => {
    res.status(200).send('OK coins!');
});


export {
    router
}