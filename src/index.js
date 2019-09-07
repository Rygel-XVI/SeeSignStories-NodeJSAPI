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

// app.use('/session', routes.session);
app.use('/channel', routes.channel);
app.use('/video', routes.video);

// Start

// const eraseDatabaseOnSync = true;

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


// sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
//   if (eraseDatabaseOnSync) {
//     createUsersWithMessages();
//   }

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
  );
// }); 

// const createUsersWithMessages = async () => {
//   await models.User.create(
//     {
//       username: 'rwieruch',
//       messages: [
//         {
//           text: 'Published the Road to learn React',
//         },
//       ],
//     },
//     {
//       include: [models.Message],
//     },
//   );

//   await models.User.create(
//     {
//       username: 'ddavids',
//       messages: [
//         {
//           text: 'Happy to release ...',
//         },
//         {
//           text: 'Published a complete ...',
//         },
//       ],
//     },
//     {
//       include: [models.Message],
//     },
//   );
// };