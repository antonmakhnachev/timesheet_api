const Connection = require('tedious').Connection;
const config = {
    server: 'srv-db1',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'GLAVAPU/Mahnachev_AA', //update me
            password: 'jHy5yoSk',
              //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        // encrypt: true,
        database: 'db_Timesheet',
        trustServerCertificate: true  //update me
    }
}

module.exports = { Connection, config };
