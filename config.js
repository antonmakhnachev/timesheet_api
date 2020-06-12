const { NODE_ENV, PORT, SERVER_CONNECT } = process.env

module.exports.PORT = PORT || 3000;
module.exports.SERVER_CONNECT = NODE_ENV === 'production' ? SERVER_CONNECT : '';
