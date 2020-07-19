
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', t => {
        t.increments('id')
        t.string('fullname').notNullable()
        t.string('email').unique().notNullable()
        t.string('password').notNullable()
        t.string('gender').notNullable()
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
  };