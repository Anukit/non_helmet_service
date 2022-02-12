const db = require("../dbconnection");

var Register = {
  getcheckEmail: function (email, callback) {
    return db.query(
      `SELECT COUNT("id") FROM db_project."users" WHERE email = $1 AND active = 1 AND is_verified = 1`,
      [email],
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
        email, firstname, lastname, password, role, active, create_at, update_at, is_verified)
        VALUES ($1, $2, $3, $4, 1, 1, $5, $6, 0) RETURNING id AS user_id`,
      [email, firstname, lastname, password, datetime, datetime],
      callback
    );
  },
};
module.exports = Register;
