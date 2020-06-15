require('dotenv').config();

const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// параметры подключения
const { PORT } = require('./config');


// центральный роутер
const routes = require('./routes/index');


// подключение к БД
const knex = require('./connection_config');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);




// проверка подключения к БД
if (knex) {
  console.log('Server is connected');
} else {
  console.log('Connected error');
}


app.listen(PORT, () => {
  console.log(`Port ${PORT}`);
});