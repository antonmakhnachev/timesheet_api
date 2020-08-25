const routerStaff = require('express').Router();
const { addStaff } = require('../controllers/staff');

routerStaff.post('/add', addStaff);

module.exports = routerStaff;
