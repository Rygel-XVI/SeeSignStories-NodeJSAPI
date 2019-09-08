import { Router } from 'express';

const router = Router();


router.get('/', async (req, res) => {
    const video = await req.context.models.Video.findAll()
    return res.json(video);
});

router.get('/:videoId', async (req, res) => {
    const video = await req.context.models.Video.findAll()
    return res.send(req.context.models.video[req.params.videoId]);
});

// routes I need

// get with etag match to see if it has changed
//     if it has changed update that entry in the db via post
            // if video cannot be found delete from db

        // then once checked if etag has changed serve the client


export default router;