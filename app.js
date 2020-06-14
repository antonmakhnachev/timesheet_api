require('dotenv').config();

const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const { PORT } = require('./config');

const { Connection, config } = require('./connection_config');


const connection = new Connection(config);

const routes = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);


// app.use




connection.on('connect', function(err) {
    // If no error, then good to proceed.
    if (err) {
      console.log({ 'Connection error': err });
    } else {
      console.log("Connected to the server");
    }
});




app.listen(PORT, () => {
  console.log(`Port ${PORT}`);
});