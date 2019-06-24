const express = require('express');

const server = express();
server.use(express.json());

const usersRouter = require('../users/users-router');
const citiesRouter = require('../cities/cities-router');
/* const manyToManyRouter = require('../manyToMany/manyToMany-router') */


server.use('/users', usersRouter);
server.use('/cities', citiesRouter)
/* server.use('/manyToMany', manyToManyRouter) */

module.exports = server;