
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('countries', function(table) {
      table.increments('id').primary();
      table.string('dest_country');
      table.string('grand_total');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('demographics', function(table) {
      table.increments('id').primary();
      table.string('origin_country');
      table.string('individual_total');
      table.string('total_minors');
      table.integer('dest_country_id').unsigned()
      table.foreign('dest_country_id')
        .references('countries.id');

      table.timestamps(true, true);
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('demographics'),
    knex.schema.dropTable('countries')
  ]);
};