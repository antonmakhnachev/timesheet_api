const knex = require('../connection_config');

module.exports.addEmloyee = (req, res, next) => {
  const { first_name, second_name, middle_name, employee_number } = req.body;

  knex('staff')
  .insert({
    first_name: first_name,
    second_name: second_name,
    middle_name: middle_name,
    employee_number: employee_number,
  })
  .then(function (result) {
    res.status(201).send({ message: 'Данные добавлены' })
  })
  .catch(function (error) {
    res.send({ error })
  })
}