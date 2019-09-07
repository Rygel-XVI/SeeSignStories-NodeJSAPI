import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    return res.send(Object.values(req.context.models.video));
});

router.get('/:channelId', (req, res) => {
    return res.send(req.context.models.video[req.params.videoId]);
});

export default router;