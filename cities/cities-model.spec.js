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

        /* it('should return a 200 on login ', async () => {

            return supertest(server)
                .post('/users')
                .send({ username: 'a', password: 'b', email: 'c' })
                .expect(200)

        })
 */
        it("should return 200 when user registers", async () => {
            const body = { username: 'd', password: 'e', email: 'c' };
            const logBod = { username: 'd', password: 'e' }

            let res = await supertest(server)
                .post("/users")
                .send(body);


            expect(res.status).toBe(200);

            let login = await supertest(server)
                .post('/users/login')
                .send(logBod)

            expect(login.status).toBe(200)
        });

    })

    /* describe('addUser()', () => {
        it('should run addUser', async () => {

            await addUser({ username: 'a', password: 'b', email: 'c' })

            const user = await db('users')

            expect(user).toHaveLength(1)
        });

    }) */




})