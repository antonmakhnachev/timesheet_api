const routerTimesheet = require('express').Router();
const { addDocument, addUnnormalHours, deleteDocument } = require('../controllers/timesheet');

routerTimesheet.post('/adddocument', addDocument);
routerTimesheet.post('/addunnormalhours', addUnnormalHours);
routerTimesheet.post('/deletedocument', deleteDocument);

module.exports = routerTimesheet;
