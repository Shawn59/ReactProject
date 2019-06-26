    import * as express from "express";
    import DB from './db'

    const router = express.Router();
    router.get('/api/hello', (req, res, next) => {
        res.json('World');
    });

    router.get('/api/groups', async (req, res) => {
        try {
            let groups = await DB.Groups.all();
            res.json(groups);
        } catch (e) {
            console.log(e);
            res.sendStatus(500)
        }

    });

    export default router;