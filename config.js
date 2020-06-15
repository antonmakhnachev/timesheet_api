const { NODE_ENV, PORT } = process.env;
const CONNECTION_DATA = require('./connection_config');

module.exports.PORT = PORT || 3000;
module.exports.SERVER_CONNECT = NODE_ENV === 'production' ? CONNECTION_DATA : CONNECTION_DATA;
