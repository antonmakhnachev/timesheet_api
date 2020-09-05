const routerTimesheet = require('express').Router();
const { addDocument } = require('../controllers/timesheet');

routerTimesheet.post('/adddocument', addDocument);

module.exports = routerTimesheet;
