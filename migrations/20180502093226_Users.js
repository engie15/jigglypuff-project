
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('Users', function(table) {
      table.increments('id')
      table.string('name')
      table.string('hash')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Users')
};
