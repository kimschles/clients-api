exports.up = function(knex, Promise) {
  return knex.schema.createTable('clients', (table) => {
    table.increments();
    table.text('name');
    table.bigint('phone_number');
    table.text('email');
    table.text('services_requested')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('client');
};
