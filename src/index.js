import 'dotenv/config';
import cors from 'cors';
import favicon from 'serve-favicon';
import path from 'path';
import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';

import { seed } from './seeds'

import routes from './routes/index'
import models, { sequelize } from './models';

const app = express();

// Application-Level Middleware

app.use(cors());
app.use(morgan('dev'));

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(async (req, res, next) => {
  req.context = {
    models
  };  
  next();
});

// Routes

app.use('/channel', routes.channel);
app.use('/video', routes.video);


app.route('/events')
  .all(function (req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
  })

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(() => {
  // if (eraseDatabaseOnSync) {
    // createChannelWithVideos();
  // }
  return seed()
}).then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
});