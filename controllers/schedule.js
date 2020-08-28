const knex = require('../connection_config');

module.exports.addSchedule = (req, res, next) => {
  const {
    scheduleName, idDateEnd, isUnnormal, isShort, isIndivid, idDay, startDayHours,
    startDayMinutes, durationDayHours, durationDayMinutes, isWorkday, idDateFrom, idDateTo,
  } = req.body;

  knex.raw(`
    exec add_schedule '${scheduleName}', '${idDateEnd}', '${isUnnormal}', '${isShort}', '${isIndivid}', '${idDay}', '${startDayHours}', '${startDayMinutes}',
      '${durationDayHours}', '${durationDayMinutes}', '${isWorkday}', '${idDateFrom}', '${idDateTo}'
    `)
    .then((result) => res.send({ result }))
    .catch(next);
};
