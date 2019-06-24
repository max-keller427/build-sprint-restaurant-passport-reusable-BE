const knex = require('knex');
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development);

module.exports = {
    addCity,
    getCities,
    getCityById,
    getRestaurants,
    getRestaurantById,
}

function addCity(city) {
    return db('cities')
        .insert(city, 'id')
}

function getCities() {
    return db('cities')
}

function getCityById(id) {
    return db('cities')
        .first()
        .where('city.id', id)
}

function getRestaurants(id) { // gets by city id
    return db('restaurants')
        .join('cities', 'city.id', 'restaurants.city_id') // this is a post not a get
        .select('restaurants.id', 'restaurants.name as name')
        .where('restaurants.city_id', id)
}

function getRestaurantById(id) {
    return db('restaurants')
        .first()
        .where('restaurants.id', id)
}