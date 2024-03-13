import {Coin} from "../../../../models/db/coin.model";
import {Types} from "mongoose";
import BadRequestError, {BadRequestCommon} from "../../../../models/errors/BadRequestError";
import {CoinMapper} from "../../../../mappers/CoinMapper";

const findAll = async () => {
    const results = await Coin.find({}).exec();
    if (!results) {
        throw new BadRequestError(BadRequestCommon.RESOURCE_NOT_FOUND);
    }
    return results.map((el) => CoinMapper.parseToDto(el))
}

const findById = async (id: string) => {
    if (!Types.ObjectId.isValid(id)) {
        throw new BadRequestError({message: 'Invalid Id'});
    }

    const result = await Coin.findById(id).exec();
    if (!result) {
        throw new BadRequestError(BadRequestCommon.RESOURCE_NOT_FOUND);
    }

    return CoinMapper.parseToDto(result)
}

export {
    findAll,
    findById
}