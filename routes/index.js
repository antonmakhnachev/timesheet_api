const routes = require('express').Router();
const routerStaff = require('./staff');


routes.use('/staff', routerStaff);

module.exports = routes;

