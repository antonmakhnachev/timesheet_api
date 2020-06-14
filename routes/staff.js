const routerStaff = require('express').Router();
const { addEmloyee } = require('../controllers/staff');

routerStaff.post('/add', addEmloyee);


module.exports = routerStaff;