import {Coin} from "../../../../models/db/coin.model";
import {Types} from "mongoose";
import BadRequestError, {BadRequestCommon} from "../../../../models/errors/BadRequestError";

const findAll = async () => {
    const result = await Coin.find({}).exec();
    if (!result) {
        throw new BadRequestError(BadRequestCommon.RESOURCE_NOT_FOUND);
    }
    return result
}

const findById = async (id: string) => {
    if (!Types.ObjectId.isValid(id)) {
        throw new BadRequestError({message: 'Invalid Id'});
    }

    const result = await Coin.findById(id).exec();
    if (!result) {
        throw new BadRequestError(BadRequestCommon.RESOURCE_NOT_FOUND);
    }
    return result
}

export {
    findAll,
    findById
}