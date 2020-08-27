const knex = require('../connection_config');

module.exports.addStaff = (req, res, next) => {
  const {
    firstName, secondName, middleName, employeeNumber, phone, email, gender,
    typeWork, birthday, department, position, schedule,
  } = req.body;

  knex.raw(`
    exec add_staff '${firstName}', '${secondName}', '${middleName}', '${employeeNumber}', '${phone}', '${email}', '${gender}', '${typeWork}', '${birthday}', '${department}', '${position}', '${schedule}'
    `)
    .then((result) => {
      res.send({ staff: result });
    })
    .catch((error) => {
      res.send({ error });
    });
};
