require('dotenv').config();

const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const { PORT } = require('./config');

// const { Connection, config } = require('./connection_config');

const knex = require('knex')({
  client: 'mssql',
  connection: {
    host : 'srv-db1',
    user : 'sa',
    password : 'Admin407',
    database : 'db_Timesheet'
  },
  debug: true
});



// const connection = new Connection(config);

// const routes = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(routes);


// app.use

knex('staff')
  .insert({
    first_name: 'test1',
    second_name: 'test1',
    middle_name: 'test1',
    employee_number: 1
  })
  .then(function (result) {
    console.log('added')
  })
  .catch(function (error) {
    console.log(error)
  })


// connection.on('connect', function(err) {
//     // If no error, then good to proceed.
//     if (err) {
//       console.log({ 'Connection error': err });
//     } else {
//       console.log("Connected to the server");
//     }
// });

if (knex) {
  console.log('ok')
} else {
  console.log('error')
}



app.listen(PORT, () => {
  console.log(`Port ${PORT}`);
});