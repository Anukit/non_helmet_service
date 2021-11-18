const db = require("../dbconnection");

var Register = {
  getcheckEmail: function (email, callback) {
    return db.query(
      `SELECT COUNT("id") FROM db_project."users" WHERE email = '${email}' AND active = 1`,
      callback
    );
  },
  postdataUser: function (data, password, callback) {
    let email = data.email;
    let firstname = data.firstname;
    let lastname = data.lastname;
    let datetime = data.datetime;
    return db.query(
      `INSERT INTO db_project."users"(
        email, firstname, lastname, password, role, active, create_at, update_at)
        VALUES ('${email}', '${firstname}', '${lastname}', '${password}', 1, 0, '${datetime}', '${datetime}')
        RETURNING id AS user_id`,
      callback
    );
  },
};
module.exports = Register;
