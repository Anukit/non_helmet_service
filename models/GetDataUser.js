const db = require("../dbconnection");

var GetDataUser = {
  getdataUser: function (user_id, callback) {
    return db.query(
      `SELECT email, firstname, lastname, image_profile, role FROM db_project."users" 
      WHERE id = '${user_id}' AND active = 1`,
      callback
    );
  },
};
module.exports = GetDataUser;
