require('dotenv').config();

const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const { PORT } = require('./config');

const Connection = require('tedious').Connection;
const config = {
    server: 'srv-db1',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'GLAVAPU/Mahnachev_AA', //update me
            password: 'jHy5yoSk'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        // encrypt: true,
        database: 'db_Timesheet'  //update me
    }
};
const connection = new Connection(config);
connection.on('connect', function(err) {
    // If no error, then good to proceed.
    console.log("Connected");
});




app.listen(PORT, () => {
  console.log(`Port ${PORT}`);
});