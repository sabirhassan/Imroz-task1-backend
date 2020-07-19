const knex = require('knex')
var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environment]

const database = knex(config)

module.exports = database