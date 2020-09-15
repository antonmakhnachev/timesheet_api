const knex = require('../connection_config');

module.exports.addDocument = (req, res, next) => {
  const {
    idDocument, idIncident, idStaff, dateFrom, dateTo, isDraft
  } = req.body;

  const idUser = req.user;

  knex.raw(`
    exec add_document '${idDocument}', '${idIncident}', '${idStaff}', '${dateFrom}', '${dateTo}', ${isDraft}, '${idUser}'
    `)
    .then((result) => res.send({ document: result }))
    .catch(next);
};
