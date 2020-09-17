const knex = require('../connection_config');

module.exports.addDocument = (req, res, next) => {
  const {
    idDocument, idIncident, idStaff, dateFrom, dateTo, isDraft, isIncluded,
  } = req.body;

  const idUser = req.user;

  knex.raw(`
    exec add_document '${idDocument}', '${idIncident}', '${idStaff}', '${dateFrom}', '${dateTo}', ${isDraft}, ${isIncluded}, '${idUser}'
    `)
    .then((result) => res.send({ document: result }))
    .catch(next);
};

module.exports.addUnnormalHours = (req, res, next) => {
  const {
    idStaff, dateFrom, dateTo, idDocument,
  } = req.body;

  knex.raw(`
    exec add_unnormal_hours '${idStaff}', '${dateFrom}', '${dateTo}', '${idDocument}'
    `)
    .then((result) => res.send({ document: result }))
    .catch(next);
};

module.exports.deleteDocument = (req, res, next) => {
  const {
    idDocument,
  } = req.body;

  knex.raw(`
    exec delete_document '${idDocument}'
    `)
    .then((result) => res.send({ document: result }))
    .catch(next);
};
