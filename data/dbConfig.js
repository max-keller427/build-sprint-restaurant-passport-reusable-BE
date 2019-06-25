const knex = require('knex');
const config = require('../knexfile')

const environment = 'production'

mondule.exports = knex(config[environment])