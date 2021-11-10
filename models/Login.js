const db = require("../dbconnection");

var Login = {

  checkPassword: function (email, callback) {
    //console.log(username);
    return db.query(
      `SELECT password FROM db_project."users" where email = '${email}'`,
      callback
    );
  },

  getIdUser: function (email, hashPW, callback) {
    return db.query(
      `SELECT id FROM db_project."users" WHERE email = '${email}' AND password = '${hashPW}'`,
      callback
    );
  },
};
module.exports = Login;
