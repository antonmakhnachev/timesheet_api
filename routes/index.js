const routes = require('express').Router();
const routerStaff = require('./staff');
const routerUser = require('./users');
const { auth } = require('../middlewares/auth');


routes.use('/users', routerUser);


routes.use(auth);
routes.use('/staff', routerStaff);


module.exports = routes;

