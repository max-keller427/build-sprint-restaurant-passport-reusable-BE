const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

server.use(cors());
server.use(helmet());
server.use(express.json());

const server = express();


const usersRouter = require('../users/users-router');
const citiesRouter = require('../cities/cities-router');
/* const manyToManyRouter = require('../manyToMany/manyToMany-router') */


server.use('/users', usersRouter);
server.use('/cities', citiesRouter)
/* server.use('/manyToMany', manyToManyRouter) */

module.exports = server;