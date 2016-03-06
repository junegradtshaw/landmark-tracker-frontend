exports.up = function(knex, Promise) {
  return knex.schema.createTable('landmarks', function(table){
    table.increments();
    table.text('image_link');
    table.text('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('landmarks');
};
