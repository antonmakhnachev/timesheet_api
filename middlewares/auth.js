const jwt = require('jsonwebtoken');
// const knex = require('../connection_config');
const { SECRET_KEY } = require('../config');
// const UnathorizedError = require('../errors/unathorizedError');

module.exports.auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).send({ message: 'Необходима авторизация' });
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return res.status(401).send({ message: 'Необходима авторизация' });
  }

  req.user = payload.ID_USER;

  return next();

  // const payload = jwt.verify(token, SECRET_KEY, (err, decoded) => {
  //   if (err) {
  //     // throw new UnathorizedError('Необходима авторизация');
  //     res.send('Необходима авторизация')
  //     // throw new Error('ddd');
  //   }

  //   return decoded;
  // });

  // req.user = payload;
  // console.log(req.user);

  // next();
};
