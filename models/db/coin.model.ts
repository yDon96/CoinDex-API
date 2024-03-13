import {model, Model, Schema} from 'mongoose';

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
 *             type: integer
 *             format: int64
 *             description: The ID of the resource.
 *          name:
 *             type: string
 *             description: The name of the resource.
 *          description:
 *             type: string
 *             description: The description of the resource.
 */
export interface ICoinDocument extends Document {
    name: String;
    type: String;
    year: String;
    quantity: Number;
    createdAt: Date;
    updatedAt: Date;
}

const coinSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
            unique: true,
        },
        year: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: 0
        },
        createdAt: {
            type: Date,
            immutable: true
        },
        updatedAt: {
            type: Date,
            default: Date.now
        }
    }
);

export const Coin: Model<ICoinDocument> = model<ICoinDocument>("Coin", coinSchema, 'Coins');