const db = require('../data/dbConfig')
const supertest = require('supertest')
const server = require('../api/server')
require('dotenv').config();


const { getCities, addRestaurant, addCity } = require('./cities-model')

const { findBy, findById, addUser, getUsers } = require('../users/users-model')



describe('cities', () => {
    beforeEach(async () => {
        await db('users', 'cities').truncate()
        await db('cities').truncate()
        await db('restaurants').truncate()
    });

    it('should set testing env variable', () => {
        expect(process.env.DB_ENV).toBe('testing');
        console.log(process.env.DB_ENV)
    });

    describe('getCities()', () => {
        it('should run getCities', async () => {

            const user = await getCities()

            expect(user).toHaveLength(0)
        })

        it('should return a 401 response when running getCities() without being logged in ', async () => {
            return supertest(server)
                .get('/cities')
                .expect(401)
        })
    })

    describe('getCities()', () => {

        it('should return a 401 response when running getCities() without being logged in ', async () => {
            return supertest(server)
                .get('/cities')
                .expect(401)
        })
    })

    describe('addRestaurant()', () => {

        it('should add a restaurant to restaurants table', async () => {

            await addCity({
                "name": "Portland"
            })

            await addRestaurant({
                "name": "Pequods",
                "city": "Chicago",
                "address": "1518 E 53rd St, Chicago, IL 60615",
                "description": "Breakfast, lunch, and dinner are all served at this cafeteria-style restaurant.",
                "city_id": 1
            })

            const rest = await db('restaurants')
            expect(rest).toHaveLength(1)
        })
    })


}) 