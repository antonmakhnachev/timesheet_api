const knex = require('../connection_config');

module.exports.addStaff = (req, res, next) => {
  const {
    firstName, secondName, middleName, employeeNumber, phone, email, gender,
    idTypeWork, birthday, idDepartment, idPosition, idSchedule, dateBeginningWork,
  } = req.body;

  knex.raw(`
    exec add_staff '${firstName}', '${secondName}', '${middleName}', '${employeeNumber}', '${phone}', '${email}',
      '${gender}', '${idTypeWork}', '${birthday}', '${idDepartment}', '${idPosition}',
      '${idSchedule}', '${dateBeginningWork}'
    `)
    .then((result) => res.send({ staff: result }))
    .catch(next);
};
