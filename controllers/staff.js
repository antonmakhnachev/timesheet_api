const Request = require('tedious').Request
const TYPES = require('tedious').TYPES;
const { Connection, config } = require('../connection_config');
const connection = new Connection(config);


module.exports.addEmloyee = (req, res, next) => {
  const { first_name, second_name, middle_name } = req.body;

  const request = new Request(`insert into dbo.staff(first_name, second_name, middle_name) values (${first_name}, ${second_name}, ${middle_name});`, function (err) {
    if (err) {
      res.send(err);
    }
  });

  connection.execSql(request);
  next();
}