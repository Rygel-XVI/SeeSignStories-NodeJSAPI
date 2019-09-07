import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    return res.send(Object.values(req.context.models.channel));
});

router.get('/:channelId', (req, res) => {
    return res.send(req.context.models.channel[req.params.channelId]);
});

export default router;