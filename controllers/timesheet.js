const knex = require('../connection_config');

module.exports.addDocument = (req, res, next) => {
  const {
    idIncident, idStaff, dateFrom, dateTo,
  } = req.body;

  knex.raw(`
    exec add_document '${idIncident}', '${idStaff}', '${dateFrom}', '${dateTo}'
    `)
    .then((result) => res.send({ document: result }))
    .catch(next);
};
