const knex = require('knex');
const config = require('../knexfile')

const environment = process.env.DB_ENV || 'development'

mondule.exports = knex(config[environment])