const knex = require('./knex');

module.exports = {
  getAllClients() {
    return knex('clients');
  }
};
