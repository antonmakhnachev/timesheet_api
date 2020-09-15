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

module.exports.getAllIncidents = (req, res, next) => {
  knex.raw(`
    select * from dbo.get_all_incidents() order by incident_name
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

module.exports.getStaffList = (req, res, next) => {
  const userId = req.user;
  knex.raw(`
    select * from dbo.get_staff_list('${userId}') order by staff_name
    `)
    .then((staffList) => {
      res.send({ staffList });
    })
    .catch((err) => {
      res.send({ err, userId });
    });
};

module.exports.getTimesheetCalendar = (req, res, next) => {
  const { dateFrom, dateTo } = req.params;
  knex.raw(`
    select * from dbo.get_timesheet_calendar('${dateFrom}', '${dateTo}') order by date_from
    `)
    .then((timesheetCalendar) => {
      res.send({ timesheetCalendar });
    })
    .catch((err) => {
      res.send({ err });
    });
};

module.exports.getStaffTimesheet = (req, res, next) => {
  const { staffId, dateFrom, dateTo } = req.params;
  knex.raw(`
    select * from dbo.get_staff_timesheet('${staffId}', '${dateFrom}', '${dateTo}') order by date_from
    `)
    .then((staffTimesheet) => {
      res.send({ staffTimesheet });
    })
    .catch((err) => {
      res.send({ err });
    });
};

module.exports.getDaysWeeks = (req, res, next) => {
  const { staffId, dateFrom, dateTo } = req.params;
  knex.raw(`
    select * from dbo.get_days_weeks() order by id_day
    `)
    .then((daysweeks) => {
      res.send({ daysweeks });
    })
    .catch((err) => {
      res.send({ err });
    });
};

module.exports.getIdDay = (req, res, next) => {
  const { dateFrom } = req.params;
  knex.raw(`
    select * from dbo.get_id_day('${dateFrom}')
    `)
    .then((idDay) => {
      res.send({ idDay });
    })
    .catch((err) => {
      res.send({ err });
    });
};

module.exports.createNewId = (req, res, next) => {
  knex.raw(`
    exec dbo.create_new_id
    `)
    .then((newId) => {
      res.send({ newId });
    })
    .catch((err) => {
      res.send({ err });
    });
};

module.exports.getAllDocuments = (req, res, next) => {
  const { dateFrom, dateTo } = req.params;
  const userId = req.user;
  knex.raw(`
    select * from dbo.get_all_documents('${userId}', '${dateFrom}', '${dateTo}') order by date_created, incident_name
    `)
    .then((documents) => {
      res.send({ documents });
    })
    .catch((err) => {
      res.send({ err });
    });
};

module.exports.getDocumentStaff = (req, res, next) => {
  const { idDocument } = req.params;
  knex.raw(`
    select * from dbo.get_document_staff('${idDocument}')
    `)
    .then((staff) => {
      res.send({ staff });
    })
    .catch((err) => {
      res.send({ err });
    });
};
