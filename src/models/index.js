import Sequelize from 'sequelize';


const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
  },
);

sequelize.authenticate().then(() => {
  console.log("Success")
}).catch(err => {
  console.log("No success D=", err)
})

const models = {
  Channel: sequelize.import('./channel'),
  Video: sequelize.import('./video'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;