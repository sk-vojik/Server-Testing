
exports.up = function(knex, Promise) {
  return knex.schema.createTable('people', tbl => {
    tbl.increments();

    tbl.string('first_name', 255).notNullable();
    tbl.string('last_name', 255).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('hobbits');
};
