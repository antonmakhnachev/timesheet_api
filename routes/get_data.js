// const { request } = require("express");

const routerGetData = require('express').Router();
const {
  getAllPositions,
  getAllDepartments,
  getAllSchedules,
  getAllTypesWork,
} = require('../controllers/get_data');

routerGetData.get('/getallpositions', getAllPositions);
routerGetData.get('/getalldepartments', getAllDepartments);
routerGetData.get('/getallschedules', getAllSchedules);
routerGetData.get('/getalltypeswork', getAllTypesWork);

module.exports = routerGetData;
