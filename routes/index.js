const routes = require('express').Router();
const routerStaff = require('./staff');
const routerUser = require('./users');
const routerGetData = require('./get_data');
const routerSchedule = require('./schedule');

const { auth } = require('../middlewares/auth');

routes.use('/users', routerUser);

routes.use(auth);
routes.use('/staff', routerStaff);
routes.use('/getdata', routerGetData);
routes.use('/schedule', routerSchedule);

module.exports = routes;
