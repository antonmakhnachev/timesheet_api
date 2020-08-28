// const { request } = require("express");

const routerGetData = require('express').Router();
const {
  getAllPositions,
  getAllDepartments,
  getAllSchedules,
  getAllTypesWork,
  getStaffList,
  getTimesheetCalendar,
  getStaffTimesheet,
  getDaysWeeks
} = require('../controllers/get_data');

routerGetData.get('/getallpositions', getAllPositions);
routerGetData.get('/getalldepartments', getAllDepartments);
routerGetData.get('/getallschedules', getAllSchedules);
routerGetData.get('/getalltypeswork', getAllTypesWork);
routerGetData.get('/getstafflist', getStaffList);
routerGetData.get('/gettimesheetcalendar/:dateFrom&:dateTo', getTimesheetCalendar);
routerGetData.get('/getstafftimesheet/:staffId&:dateFrom&:dateTo', getStaffTimesheet);
routerGetData.get('/getdaysweeks', getDaysWeeks);

module.exports = routerGetData;
