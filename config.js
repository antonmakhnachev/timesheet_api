const { NODE_ENV, PORT, SECRET_KEY } = process.env;

module.exports.PORT = PORT || 3000;
module.exports.SECRET_KEY = NODE_ENV === 'production' ? SECRET_KEY : 'secret_key';