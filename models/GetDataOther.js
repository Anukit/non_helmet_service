const db = require("../dbconnection");

var GetDataOther = {
  getdataUserAll: function (callback) {
    return db.query(
      `SELECT id, email, firstname, lastname, image_profile, role, otp, active, create_at, update_at, is_verified FROM db_project."users" 
      WHERE active = 1 ORDER BY update_at DESC`,
      callback
    );
  },

  // getdataObjDetect: function (callback) {
  //   return db.query(
  //     `SELECT id, request_user, image_detection, licence_number, latitude, longitude, detection_at, status, active, create_at, update_by, update_at
  //     FROM db_project.object_detection WHERE active = 1 ORDER BY update_at DESC`,
  //     callback
  //   );
  // },
  getdataObjDetect: function (callback) {
    return db.query(
      `SELECT a.id, b.firstname, b.lastname, b.email, a.image_detection, a.licence_number, a.latitude, a.longitude, a.detection_at, a.status, a.create_at, a.update_by, a.update_at
      FROM db_project.object_detection as a
			JOIN db_project.users as b ON a.request_user = b.id
			WHERE a.active = 1 AND b.active = 1 ORDER BY update_at DESC`,
      callback
    );
  },

  searchdataObjDetect: function (search_value, callback) {
    return db.query(
      `SELECT a.id, b.firstname, b.lastname, b.email, a.image_detection, a.licence_number, a.latitude, a.longitude, a.detection_at, a.status, a.create_at, a.update_by, a.update_at
      FROM db_project.object_detection as a
			JOIN db_project.users as b ON a.request_user = b.id
			WHERE a.active = 1 AND b.active = 1 AND (b.firstname LIKE '%${search_value}%' OR b.lastname LIKE '%${search_value}%' OR a.licence_number LIKE '%${search_value}%') 
      ORDER BY update_at DESC`,
      callback
    );
  },

  getdataReport: function (callback) {
    return db.query(
      `SELECT a.id, b.request_user, b.image_detection, b.licence_number, a.approve_by, a.description, a.active as active_report, a.create_at, a.update_at
      FROM db_project.report as a
      JOIN db_project.object_detection as b ON a.request_object_detection = b.id
      WHERE a.active = 1 AND b.active = 1 ORDER BY a.update_at DESC`,
      callback
    );
  },

  getstaticFromStatus: function (callback) {
    return db.query(``, callback);
  },
};

module.exports = GetDataOther;
