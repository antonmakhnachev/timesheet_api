require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// параметры подключения
const { PORT, SECRET_KEY } = require('./config');

// центральный роутер
const routes = require('./routes/index');

// подключение к БД
const knex = require('./connection_config');

const corsOptions = {
  origin: ['http://localhost:8080', 'http://localhost:8081', 'http://127.0.0.1:5500'],
  methods: 'GET, POST, PUT, DELETE, PATCH, HEAD',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type'],
  credentials: true,
};

app.use('*', cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser(SECRET_KEY));

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
