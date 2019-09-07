import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import uuidv4 from 'uuid/v4';
import routes from './routes'

import models, { sequelize } from './models';

const app = express();

// Application-Level Middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(async (req, res, next) => {
//   req.context = {
//     models,
//     me: await models.User.findByLogin('rwieruch'),
//   };
//   next();
// });


// Routes

app.use('/channel', routes.channel);
app.use('/video', routes.video);


const eraseDatabaseOnSync = true;

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});
app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});
app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});
app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});


sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createChannelWithVideos();
  }

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});

const createChannelWithVideos = async () => {
  await models.Channel.create(
    {
      userName: "UserName",
      eTag: "TSZMfrewi50",
      channelId: "UCzm23K3jWedsp9SQejnOrpA",
      videos: [
        {
          hostSite: "youtube#video",
          videoId: "TSZMfrewi50",
          eTag: "8jEFfXBrqiSrcF6Ee7MQuz8XuAM/ygmQfUw4qHv3xwWnUv-xrMsn6kg"
        },
        {
          hostSite: "youtube#video",
          videoId: "P97UBseVv7w",
          eTag: "8jEFfXBrqiSrcF6Ee7MQuz8XuAM/EtCP-X0RtYhKiA5nKKxSS30yMrw"
        },
      ],
    },
    {
      include: [models.Message],
    },
  )
}