const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = require('../data/dbConfig');

module.exports = {
    findById,
    findBy,
    addUser,
    getUsers
}

function findBy(username) {
    console.log(username)
    return db('users').where(username);
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

function getUsers() {
    return db('users')
}
