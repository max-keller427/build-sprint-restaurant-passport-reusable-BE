const db = require('../data/dbConfig')
const supertest = require('supertest');
const server = require('../api/server');

const { findBy, findById, addUser, getUsers } = require('./users-model.js')

describe('users model', () => {
    beforeEach(async () => {
        await db('users').truncate()
    });

    it('should set testing env variable', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('addUser()', () => {
        it('should add a user to the users table', async () => {

            await addUser({ username: 'Swordfish', password: 'pass', email: 'jodfdfhn@john.com' })

            const user = await db('users')

            expect(user).toHaveLength(1)
        })
    })

})

