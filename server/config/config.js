const fs = require('fs')

module.exports = {
    development: {
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,      
      host: 'localhost',
      dialect: 'postgres'
    },
    test: {
      username: 'root',
      password: null,
      database: 'see-sign-stories',
      host: '127.0.0.1',
      dialect: 'postgres'
    },
    production: {
      username: "root",
      password: null,
      database: "database_production",
      host: "127.0.0.1",
      dialect: "postgres"
    }
  }