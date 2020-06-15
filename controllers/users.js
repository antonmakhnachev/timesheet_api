const knex = require('../connection_config');
const bcrypt = require('bcryptjs');
const SECRET_KEY = require('../config');


// регистрация нового пользователя
module.exports.createUser = (req, res, next) => {
  const {
    email, first_name, second_name, id_position, id_department, id_department_controllable, id_date_start, pass,
  } = req.body;

  bcrypt.hash(pass, 10)
    .then((hash) => knex('users').insert({
      email, first_name, second_name, id_position, id_department, id_department_controllable, id_date_start, pass: hash
    }))
    .then(function(result) {
      res.status(201).send({ message: 'Пользователь добавлен' });
    })
    .catch(function(error) {
      console.log(error);
    })
};

module.exports.login = (req, res, next) => {

}

