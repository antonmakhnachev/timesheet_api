const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const knex = require('../connection_config');
const { SECRET_KEY } = require('../config');

// регистрация нового пользователя
module.exports.createUser = (req, res, next) => {
  const {
    email, firstName, secondName, idPosition, idDepartment, pass,
  } = req.body;

  bcrypt.hash(pass, 10)
    .then((hash) => knex.raw(`
      exec add_user '${email}', ${firstName}, ${secondName}, '${idPosition}', '${idDepartment}', '${hash}'
      `))
    .then(() => {
      res.status(201).send({ message: 'Пользователь добавлен' });
    })
    .catch((err) => {
      res.send({ err });
    });
};

// логин
module.exports.login = (req, res, next) => {
  const { email, pass } = req.body;
  knex.raw(`
    select * from get_user('${email}')
    `)
    .then((user) => {
      if (user.length === 0) {
        // const a = user.length
        // Promise.reject(new Error('не найден'));
        // res.send(a)
        throw new Error('не найден');
        // res.send({ message: 'не найден'});
      }
      const passCurrent = user[0].PASS;
      bcrypt.compare(pass, passCurrent)
        .then((matched) => {
          if (!matched) {
            throw new Error('неверный пароль');
            // res.send({ message: 'неверный пароль' });
          } else {
            const idUser = user[0].ID_USER;
            const token = jwt.sign({ ID_USER: idUser }, SECRET_KEY, { expiresIn: '8h' });
            res.send({ message: 'Всё верно!', token, idUser });
          }
        })
        .catch(next);
    })
    .catch(next);
};
