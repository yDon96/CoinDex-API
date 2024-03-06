const exp = require('express');

const router = exp.Router();

const basePath = '/countries';

router.get(basePath, async (req: any, res: any, next: any) => {
    res.status(200).send('OK countries!');
});


export {
    router
};