import {model, Model, Schema, Types} from 'mongoose';

export interface ICoinDocument extends Document {
    _id: Types.ObjectId
    name: String;
    type: String;
    year: Number;
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
            type: Number,
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