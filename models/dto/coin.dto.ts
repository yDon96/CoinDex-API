/**
 * @swagger
 * components:
 *   #-------------------------------
 *   # Reusable schemas (data models)
 *   #-------------------------------
 *   schemas:
 *     Coin:
 *       type: object
 *       properties:
 *          id:
 *             type: string
 *             description: The ID of the resource.
 *          name:
 *             type: string
 *             description: The name of the resource.
 *          type:
 *             type: string
 *             description: TThe type of collection to which the coin belongs.
 *          years:
 *             type: integer
 *             description: The year the coin was minted.
 *          quantity:
 *             type: integer
 *             description: The quantity of identical coins.
 */
export interface ICoinDTO {
    id: string;
    name: string;
    type: string;
    year: number;
    quantity: number;
}