const knex = require('knex');
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development);

module.exports = {
    getManyToMany,
    addManyToMany
}

function getManyToMany(userId) {
    return db('manyToMany')
        .join('restaurants', 'restaurants.id', 'manyToMany.restaurant_id')
        .select('manyToMany.user_id', 'restaurants.city', 'restaurants.id as restId', 'restaurants.name')
        .where('manyToMany.user_id', userId)
}


function addManyToMany(many) {
    return db('manyToMany')
        .insert(many, 'id')
}