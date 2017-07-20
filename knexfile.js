require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/clients'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
