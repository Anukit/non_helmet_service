const db = require("../dbconnection");

var UploadDetectedImage = {
  insertDataDetectedImg: function (data, text_license, filename, callback) {
    let user_id = data.user_id;
    let datetime = data.datetime;
    let latitude = data.latitude;
    let longitude = data.longitude;
    let detection_at = data.detection_at;
    return db.query(
      `INSERT INTO db_project.object_detection(
        request_user, image_detection, licence_number, latitude, longitude, detection_at, status, active, create_at, update_by, update_at)
        VALUES ('${user_id}', '${filename}', '${text_license}', '${latitude}', '${longitude}', '${detection_at}', 10, 1, '${datetime}', '${user_id}', '${datetime}')`,
      callback
    );
  },

  getAmountRider: function (callback) {
    return db.query(
      `SELECT request_user FROM db_project.object_detection`,
      callback
    );
  },

  getDataDetectedImage: function (user_id, callback) {
    return db.query(
      `SELECT id, image_detection, latitude, longitude, detection_at, status, active, update_at
      FROM db_project.object_detection
      WHERE request_user = '${user_id}'`,
      callback
    );
  },
};
module.exports = UploadDetectedImage;
