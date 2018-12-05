
exports.up = function(knex, Promise) {
  return knex.schema.table('countries', (table) => {
    table.renameColumn('destination_country', 'dest_country')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('countries', (table) => {
    table.renameColumn('dest_country', 'destination_country')
  })
};
