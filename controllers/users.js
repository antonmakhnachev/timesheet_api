const knex = require('../connection_config');
const bcrypt = require('bcryptjs');
const SECRET_KEY = require('../config');
// const cookieParser = require('cookie-parser');


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
            res.send(user)
          })
      } else {
        res.send('пользователь не найден')
      }
      res.cookie(SECRET_KEY, user[0].ID_USER)
    })
    .catch(function(error) {
      res.send(error)
    })
};