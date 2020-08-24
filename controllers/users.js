const knex = require('../connection_config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

// регистрация нового пользователя
module.exports.createUser = (req, res, next) => {
  const {
    email, firstName, secondName, idPosition, idDepartment, idDepartmentControllable, idDateStart, idDateEnd, pass,
  } = req.body;

  bcrypt.hash(pass, 10)
    .then((hash) => knex.raw(
      `exec add_user '${email}', ${firstName}, ${secondName}, '${idPosition}', '${idDepartment}', '${idDepartmentControllable}', ${idDateStart}, ${idDateEnd}, '${hash}'`
    ))
    .then(function(result) {
      res.status(201).send({ message: 'Пользователь добавлен' });
    })
    .catch(function(error) {
      console.log(error);
    })
};

// логин
module.exports.login = (req, res, next) => {
  const { email, pass } = req.body;

  knex
    .select('*')
    .from('users')
    .where('email', email)
    .then(function(user) {
      if (user.length !== 0) {
        bcrypt.compare(pass, user[0].PASS)
          .then((matched) => {
            if (!matched) {
              res.send('неверный пароль')
            }
          })
      } else {
        res.send('пользователь не найден')
      }
      const token = jwt.sign({ ID_USER: user[0].ID_USER }, SECRET_KEY, { expiresIn: '8h' })
      res.cookie('jwt', token, {
        maxAge: 3600 * 8,
        httpOnly: true,
      });
      res.send(token);
    })
    .catch(function(error) {
      res.send(error)
    })
};