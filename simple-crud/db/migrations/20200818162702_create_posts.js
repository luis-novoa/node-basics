
exports.up = function (knex) {
  return knex.schema.createTable('posts', function (table) {
    table.increments('id');
    table.string('content').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('posts');
};
