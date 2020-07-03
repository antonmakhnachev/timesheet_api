const routerUser = require('express').Router();
const { createUser, login } = require('../controllers/users');

routerUser.post('/signup', createUser);
routerUser.post('/signin', login);



module.exports = routerUser;