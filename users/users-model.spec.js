require('dotenv').config();
require('dotenv').config();
const db = require('../data/dbConfig')
const supertest = require('supertest')
const server = require('../api/server')



const { findBy, findById, addUser, getUsers } = require('./users-model')



describe('users model', () => {
    beforeEach(async () => {
        await db('users').truncate()
    });

    it('should set testing env variable', () => {
        expect(process.env.DB_ENV).toBe('testing');
        console.log(process.env.DB_ENV)
    });

    describe('getUsers()', () => {
        it('should run addUser', async () => {

            const user = await getUsers()

            expect(user).toHaveLength(0)
        })

        it('should return a 200 response code on successful getUsers()', async () => {
            return supertest(server)
                .get('/users')
                .expect(200)
        })

    })

    describe('addUser()', () => {
        it('should run addUser', async () => {

            await addUser({ username: 'a', password: 'b', email: 'c' })

            const user = await db('users')

            expect(user).toHaveLength(1)
        });

        describe('login process', () => {
            it("should return 200 when user logins in after registering", async () => {
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

    })






})