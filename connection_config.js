const knex = require('knex')({
  client: 'mssql',
  connection: {
    host : 'srv-db1',
    user : 'sa',
    password : 'Admin407',
    database : 'db_Timesheet',
},
  debug: true,
  useNullAsDefault: true,
});

module.exports = knex;
