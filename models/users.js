const { Model } = require('objection')
const database = require("../db/knex")

Model.knex(database)

module.exports = class User extends Model{
    static get tableName()
    {
        return "users"
    }
}