const knex = require('../connection_config');

const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');
//const UnathorizedError = require('../errors/unathorizedError');

module.exports.auth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    //throw new UnathorizedError('Необходима авторизация');
    throw new Error('ddd')
    //res.send('Необходима авторизация')
  }

  const payload = jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      //throw new UnathorizedError('Необходима авторизация');
      //res.send('Необходима авторизация')
      throw new Error('ddd')
    }

    return decoded;
  });

  req.user = payload;
  console.log(req.user)

  next();
};