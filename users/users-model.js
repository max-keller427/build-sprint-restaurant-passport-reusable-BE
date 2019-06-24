const knex = require('knex');
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development);

module.exports = {
    addUser
}

function addUser(user) {
    return db('users')
        .insert(user, 'id')
}

//see zoos db project - will need a table to store lists of restaurants that all users have been to. You need a foreign key to point to user id from users table, and foreign key to point to restaurant id from restaurants table (we need a many to many restaurnts) OR try out postress
