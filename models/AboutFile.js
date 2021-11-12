const db = require("../dbconnection");

var AboutFile = {
  updateImage: function (image_profile, user_id, callback) {
    return db.query(
      `UPDATE db_project."users"
      SET image_profile = '${image_profile}'
      WHERE id = ${user_id} AND active = 1`,
      callback
    );
  },
};
module.exports = AboutFile;
