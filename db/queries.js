const knex = require('./knex');

module.exports = {
  getAllClients() {
    return knex('clients');
  },
  getOneClient(id) {
    return knex('clients').where('id', id).first();
  },
  createClient(newClient){
    return knex('clients').insert(newClient, '*');
  }
};
