const knex = require('../connection_config');



module.exports.addEmloyee = (req, res, next) => {
  const { firstName, secondName, middleName, employeeNumber, idDepartment, idDateStart } = req.body;

  knex.raw(
    `exec add_staff ${firstName}, ${secondName}, ${middleName}, ${employeeNumber}, '${idDepartment}', ${idDateStart}`
  )
  .then(function (result) {
    res.status(201).send({ message: 'Данные добавлены', user: 'req.user' })
  })
  .catch(function (error) {
    res.send({ error })
  })
}