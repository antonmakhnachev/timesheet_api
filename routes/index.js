const routes = require('express').Router();
const routerStaff = require('./staff');
const routerUser = require('./users');


routes.use('/staff', routerStaff);
routes.use('/users', routerUser);

module.exports = routes;

