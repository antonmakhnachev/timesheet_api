const routerSchedule = require('express').Router();
const { addSchedule } = require('../controllers/schedule');

routerSchedule.post('/add', addSchedule);

module.exports = routerSchedule;
