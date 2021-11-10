const db = require("../dbconnection");

var GetDataUser = {
  getdataUser: function (user_id, callback) {
    return db.query(
      `SELECT email, firstname, lastname, image_profile FROM db_project."users" WHERE id = '${user_id}'`,
      callback
    );
  },
};
module.exports = GetDataUser;
