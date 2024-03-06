const exp = require('express');

const router = exp.Router();

const basePath = '/coins';

router.get(basePath, async (req: any, res: any, next: any) => {
    res.status(200).send('OK coins!');
});


export {
    router
}