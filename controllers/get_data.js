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

module.exports.getAllDepartments = (req, res, next) => {
  knex.raw(`
    select * from dbo.get_all_departments() order by department_name_middle
    `)
    .then((result) => {
      res.send({ result });
    })
    .catch((err) => {
      res.send({ err });
    });
};

module.exports.getAllSchedules = (req, res, next) => {
  knex.raw(`
    select * from dbo.get_all_schedules() order by schedule_name
    `)
    .then((result) => {
      res.send({ result });
    })
    .catch((err) => {
      res.send({ err });
    });
};

module.exports.getAllTypesWork = (req, res, next) => {
  knex.raw(`
    select * from dbo.get_all_types_work() order by type_work_name
    `)
    .then((result) => {
      res.send({ result });
    })
    .catch((err) => {
      res.send({ err });
    });
};
