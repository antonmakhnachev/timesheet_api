const { request } = require("express");

const routerGetData = require('express').Router();
const { getAllPositions } = require('../controllers/get_data');


routerGetData.get('/getallpositions', getAllPositions);

module.exports = routerGetData;