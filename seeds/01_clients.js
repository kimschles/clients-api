exports.seed = function(knex, Promise) {
  return knex.schema.raw('TRUNCATE TABLE clients RESTART IDENTITY CASCADE')
    .then(function() {
      return knex('clients').insert([{
        name: 'Kim Schlesinger',
        phone_number: 1239876471,
        email: 'kim.schlesinger@kim.com',
        services_requested: 'Hair'
      },]);
    });
};
