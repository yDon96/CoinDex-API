import {findAll, findById} from "../domain/coins.service";

const getAll = async (req: any, res: any, next: any) => {
    try {
        const coins = await findAll()
        res.status(200).send(coins);
    } catch (e) {
        next(e);
    }
}

const getById = async (req: any, res: any, next: any) => {
    const {id} = req.params
    try {
        const coin = await findById(id)
        res.status(200).send(coin);
    } catch (e) {
        next(e);
    }
}

export {
    getAll,
    getById
}