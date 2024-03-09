const exp = require('express');

const router = exp.Router();

const basePath = '/countries';

/**
 * @swagger
 * /countries:
 *     get:
 *       summary: "Get all countries"
 *       description: "Retrieves a list of all countries."
 *       produces:
 *         - "application/json"
 *       responses:
 *         200:
 *           description: "Successful operation"
 */
router.get(basePath, async (req: any, res: any, next: any) => {
    res.status(200).send('OK countries!');
});


export {
    router
};