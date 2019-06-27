const db = require('../data/dbConfig')
const supertest = require('supertest')
const server = require('../api/server')
require('dotenv').config();


const { getCities } = require('./cities-model')

const { findBy, findById, addUser, getUsers } = require('../users/users-model')



describe('cities', () => {
    beforeEach(async () => {
        await db('users').truncate()
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

}) 