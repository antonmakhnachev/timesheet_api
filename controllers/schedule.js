const knex = require('../connection_config');

module.exports.addSchedule = (req, res, next) => {
  const {
    scheduleName, dateTo, isUnnormal, isShort, isIndivid,
  } = req.body;

  knex.raw(`
    exec add_schedule '${scheduleName}', '${dateTo}', '${isUnnormal}', '${isShort}', '${isIndivid}'
    `)
    .then((result) => res.send({ result }))
    .catch(next);
};

module.exports.addScheduleDays = (req, res, next) => {
  const {
    idSchedule, idDay, startDayHours,
    startDayMinutes, durationDayHours, durationDayMinutes, isWorkday, dateFrom, dateTo,
  } = req.body;

  knex.raw(`
    exec add_schedule_days '${idSchedule}', '${idDay}', '${startDayHours}', '${startDayMinutes}',
      '${durationDayHours}', '${durationDayMinutes}', '${isWorkday}', '${dateFrom}', '${dateTo}'
    `)
    .then((result) => res.send({ result }))
    .catch(next);
};
