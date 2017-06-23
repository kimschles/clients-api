exports.up = function(knex, Promise) {
  return knex.schema.createTable('client', (table) => {
    table.increments();
    table.text('name');
    table.integer('phone number');
    table.text('email');
    table.text('services_requested')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('client');
};
