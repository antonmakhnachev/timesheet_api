const knex = require('../connection_config');

module.exports.getAllPositions = (req, res, next) => {
  knex.raw(`
    select * from dbo.get_all_positions() order by position_name
    `)
    .then((result) => {
      res.send({ result });
    })
    .catch((err) => {
      res.send({ err });
    });
};
