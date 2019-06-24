const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    findById,
    findBy,
    addUser
}

function findBy(parameter) {
    return db('users').where(parameter);
}

function findById(id) {
    return db('users').where({ id }).first();

}

function addUser(user) {
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id)
        });
}
//see zoos db project - will need a table to store lists of restaurants that all users have been to. You need a foreign key to point to user id from users table, and foreign key to point to restaurant id from restaurants table (we need a many to many restaurnts) OR try out postress
