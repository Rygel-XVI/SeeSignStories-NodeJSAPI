import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    return res.send(Object.values(req.context.models.channel));
});

router.get('/:channelId', (req, res) => {
    return res.send(req.context.models.channel[req.params.channelId]);
});

// check to see if channel eTag has changed
    // if it has changed => check send request via video eTag for each video and update them and the channel eTag
        // if it has not changed serve the client with current db info


// if this is too many queries and i'm hitting my limit w/ youtube then only update at specific intervals or add another api key


export default router;