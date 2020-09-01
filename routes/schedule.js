const routerSchedule = require('express').Router();
const { addSchedule, addScheduleDays } = require('../controllers/schedule');

routerSchedule.post('/add', addSchedule);
routerSchedule.post('/adddays', addScheduleDays);

module.exports = routerSchedule;
